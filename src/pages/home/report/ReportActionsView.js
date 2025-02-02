import React from 'react';
import {
    Animated,
    View,
    Keyboard,
    AppState,
    ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'underscore';
import lodashGet from 'lodash.get';
import {withOnyx} from 'react-native-onyx';
import Text from '../../../components/Text';
import UnreadActionIndicator from '../../../components/UnreadActionIndicator';
import {fetchActions, updateLastReadActionID} from '../../../libs/actions/Report';
import ONYXKEYS from '../../../ONYXKEYS';
import ReportActionItem from './ReportActionItem';
import styles from '../../../styles/styles';
import ReportActionPropTypes from './ReportActionPropTypes';
import InvertedFlatList from '../../../components/InvertedFlatList';
import {lastItem} from '../../../libs/CollectionUtils';
import Visibility from '../../../libs/Visibility';
import CONST from '../../../CONST';
import themeColors from '../../../styles/themes/default';

const propTypes = {
    // The ID of the report actions will be created for
    reportID: PropTypes.number.isRequired,

    // Is this report currently in view?
    isActiveReport: PropTypes.bool.isRequired,

    /* Onyx Props */

    // The report currently being looked at
    report: PropTypes.shape({
        // Number of actions unread
        unreadActionCount: PropTypes.number,
    }),

    // Array of report actions for this report
    reportActions: PropTypes.objectOf(PropTypes.shape(ReportActionPropTypes)),

    // The session of the logged in person
    session: PropTypes.shape({
        // Email of the logged in person
        email: PropTypes.string,
    }),
};

const defaultProps = {
    report: {
        unreadActionCount: 0,
    },
    reportActions: {},
    session: {},
};

class ReportActionsView extends React.Component {
    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
        this.scrollToListBottom = this.scrollToListBottom.bind(this);
        this.recordMaxAction = this.recordMaxAction.bind(this);
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.loadMoreChats = this.loadMoreChats.bind(this);
        this.sortedReportActions = [];
        this.timers = [];
        this.unreadIndicatorOpacity = new Animated.Value(1);

        // Helper variable that keeps track of the unread action count before it updates to zero
        this.unreadActionCount = 0;

        // Helper variable that prevents the unread indicator to show up for new messages
        // received while the report is still active
        this.shouldShowUnreadActionIndicator = true;

        this.state = {
            refetchNeeded: true,
        };
    }

    componentDidMount() {
        AppState.addEventListener('change', this.onVisibilityChange);

        if (this.props.isActiveReport) {
            this.keyboardEvent = Keyboard.addListener('keyboardDidShow', this.scrollToListBottom);
            this.recordMaxAction();
        }

        fetchActions(this.props.reportID);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.isActiveReport !== this.props.isActiveReport) {
            return true;
        }

        if (!_.isEqual(nextProps.reportActions, this.props.reportActions)) {
            return true;
        }

        if (nextState.isLoadingMoreChats !== this.state.isLoadingMoreChats) {
            return true;
        }

        return false;
    }

    componentDidUpdate(prevProps) {
        // If we previously had a value for reportActions but no longer have one
        // this can only mean that the reportActions have been deleted. So we must
        // refetch these actions the next time we switch to this chat.
        if (prevProps.reportActions && !this.props.reportActions) {
            this.setRefetchNeeded(true);
            return;
        }

        const previousLastItem = lastItem(prevProps.reportActions) || {};
        const newLastItem = lastItem(this.props.reportActions) || {};
        if (previousLastItem.sequenceNumber !== newLastItem.sequenceNumber) {
            // If a new comment is added and it's from the current user scroll to the bottom otherwise
            // leave the user positioned where they are now in the list.
            const lastAction = lastItem(this.props.reportActions);
            if (lastAction && (lastAction.actorEmail === this.props.session.email)) {
                this.scrollToListBottom();
            }

            // When the number of actions change, wait three seconds, then record the max action
            // This will make the unread indicator go away if you receive comments in the same chat you're looking at
            if (this.props.isActiveReport && Visibility.isVisible()) {
                this.timers.push(setTimeout(this.recordMaxAction, 3000));
            }

            return;
        }

        // If we are switching from not active to active report then mark comments as
        // read and bind the keyboard listener for this report
        if (!prevProps.isActiveReport && this.props.isActiveReport) {
            if (this.state.refetchNeeded) {
                fetchActions(this.props.reportID);
                this.setRefetchNeeded(false);
            }

            this.recordMaxAction();
            this.keyboardEvent = Keyboard.addListener('keyboardDidShow', this.scrollToListBottom);
        }
    }

    componentWillUnmount() {
        if (this.keyboardEvent) {
            this.keyboardEvent.remove();
        }

        AppState.removeEventListener('change', this.onVisibilityChange);

        _.each(this.timers, timer => clearTimeout(timer));
    }

    /**
     * Records the max action on app visibility change event.
     */
    onVisibilityChange() {
        if (this.props.isActiveReport && Visibility.isVisible()) {
            this.timers.push(setTimeout(this.recordMaxAction, 3000));
        }
    }

    /**
     * When setting to true we will refetch the reportActions
     * the next time this report is switched to.
     *
     * @param {Boolean} refetchNeeded
     */
    setRefetchNeeded(refetchNeeded) {
        this.setState({refetchNeeded});
    }

    /**
     * Checks if the unreadActionIndicator should be shown.
     * If it does, starts a timeout for the fading out animation and creates
     * a flag to not show it again if the report is still open
     */
    setUpUnreadActionIndicator() {
        if (!this.props.isActiveReport || !this.shouldShowUnreadActionIndicator) {
            return;
        }

        this.unreadActionCount = this.props.report.unreadActionCount;

        if (this.unreadActionCount > 0) {
            this.unreadIndicatorOpacity = new Animated.Value(1);
            this.timers.push(setTimeout(() => {
                Animated.timing(this.unreadIndicatorOpacity, {
                    toValue: 0,
                    useNativeDriver: false,
                }).start();
            }, 3000));
        }

        this.shouldShowUnreadActionIndicator = false;
    }

    /**
     * Retrieves the next set of report actions for the chat once we are nearing the end of what we are currently
     * displaying.
     */
    loadMoreChats() {
        const minSequenceNumber = _.chain(this.props.reportActions)
            .pluck('sequenceNumber')
            .min()
            .value();

        if (minSequenceNumber === 0) {
            return;
        }

        this.setState({isLoadingMoreChats: true}, () => {
            // Retrieve the next REPORT_ACTIONS_LIMIT sized page of comments, unless we're near the beginning, in which
            // case just get everything starting from 0.
            const offset = Math.max(minSequenceNumber - CONST.REPORT.REPORT_ACTIONS_LIMIT, 0);
            fetchActions(this.props.reportID, offset)
                .then(() => this.setState({isLoadingMoreChats: false}));
        });
    }

    /**
     * Updates and sorts the report actions by sequence number
     */
    updateSortedReportActions() {
        this.sortedReportActions = _.chain(this.props.reportActions)
            .sortBy('sequenceNumber')
            .filter(action => action.actionName === 'ADDCOMMENT')
            .map((item, index) => ({action: item, index}))
            .value()
            .reverse();
    }

    /**
     * Returns true when the report action immediately before the
     * specified index is a comment made by the same actor who who
     * is leaving a comment in the action at the specified index.
     * Also checks to ensure that the comment is not too old to
     * be considered part of the same comment
     *
     * @param {Number} actionIndex - index of the comment item in state to check
     *
     * @return {Boolean}
     */
    isConsecutiveActionMadeByPreviousActor(actionIndex) {
        const previousAction = this.sortedReportActions[actionIndex + 1];
        const currentAction = this.sortedReportActions[actionIndex];

        // It's OK for there to be no previous action, and in that case, false will be returned
        // so that the comment isn't grouped
        if (!currentAction || !previousAction) {
            return false;
        }

        // Comments are only grouped if they happen within 5 minutes of each other
        if (currentAction.action.timestamp - previousAction.action.timestamp > 300) {
            return false;
        }

        return currentAction.action.actorEmail === previousAction.action.actorEmail;
    }

    /**
     * When the bottom of the list is reached, this is triggered, so it's a little different than recording the max
     * action when scrolled
     */
    recordMaxAction() {
        const reportActions = lodashGet(this.props, 'reportActions', {});
        const maxVisibleSequenceNumber = _.chain(reportActions)

            // We want to avoid marking any pending actions as read since
            // 1. Any action ID that hasn't been delivered by the server is a temporary action ID.
            // 2. We already set a comment someone has authored as the lastReadActionID_<accountID> rNVP on the server
            // and should sync it locally when we handle it via Pusher or Airship
            .reject(action => action.loading)
            .pluck('sequenceNumber')
            .max()
            .value();

        updateLastReadActionID(this.props.reportID, maxVisibleSequenceNumber);
    }

    /**
     * This function is triggered from the ref callback for the scrollview. That way it can be scrolled once all the
     * items have been rendered. If the number of actions has changed since it was last rendered, then
     * scroll the list to the end.
     */
    scrollToListBottom() {
        if (this.actionListElement) {
            this.actionListElement.scrollToIndex({animated: false, index: 0});
        }
        this.recordMaxAction();
    }

    /**
     * Do not move this or make it an anonymous function it is a method
     * so it will not be recreated each time we render an item
     *
     * See: https://reactnative.dev/docs/optimizing-flatlist-configuration#avoid-anonymous-function-on-renderitem
     *
     * @param {Object} args
     * @param {Object} args.item
     * @param {Number} args.index
     * @param {Function} args.onLayout
     * @param {Boolean} args.needsLayoutCalculation
     *
     * @returns {React.Component}
     */
    renderItem({
        item,
        index,
        onLayout,
        needsLayoutCalculation,
    }) {
        return (

        // Using <View /> instead of a Fragment because there is a difference between how
        // <InvertedFlatList /> are implemented on native and web/desktop which leads to
        // the unread indicator on native to render below the message instead of above it.
            <View>
                {this.unreadActionCount > 0 && index === this.unreadActionCount - 1 && (
                    <UnreadActionIndicator animatedOpacity={this.unreadIndicatorOpacity} />
                )}
                <ReportActionItem
                    action={item.action}
                    displayAsGroup={this.isConsecutiveActionMadeByPreviousActor(index)}
                    onLayout={onLayout}
                    needsLayoutCalculation={needsLayoutCalculation}
                />
            </View>
        );
    }

    render() {
        // Comments have not loaded at all yet do nothing
        if (!_.size(this.props.reportActions)) {
            return null;
        }

        // If we only have the created action then no one has left a comment
        if (_.size(this.props.reportActions) === 1) {
            return (
                <View style={[styles.chatContent, styles.chatContentEmpty]}>
                    <Text style={[styles.textP]}>Be the first person to comment!</Text>
                </View>
            );
        }

        this.setUpUnreadActionIndicator();
        this.updateSortedReportActions();
        return (
            <InvertedFlatList
                ref={el => this.actionListElement = el}
                data={this.sortedReportActions}
                renderItem={this.renderItem}
                contentContainerStyle={[styles.chatContentScrollView]}
                keyExtractor={item => `${item.action.sequenceNumber}`}
                initialRowHeight={32}
                onEndReached={this.loadMoreChats}
                onEndReachedThreshold={0.75}
                ListFooterComponent={this.state.isLoadingMoreChats
                    ? <ActivityIndicator size="small" color={themeColors.spinner} />
                    : null}
            />
        );
    }
}

ReportActionsView.propTypes = propTypes;
ReportActionsView.defaultProps = defaultProps;

export default withOnyx({
    report: {
        key: ({reportID}) => `${ONYXKEYS.COLLECTION.REPORT}${reportID}`,
    },
    reportActions: {
        key: ({reportID}) => `${ONYXKEYS.COLLECTION.REPORT_ACTIONS}${reportID}`,
        canEvict: props => !props.isActiveReport,
    },
    session: {
        key: ONYXKEYS.SESSION,
    },
})(ReportActionsView);
