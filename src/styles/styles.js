import fontFamily from './fontFamily';
import italic from './italic';
import addOutlineWidth from './addOutlineWidth';
import themeColors from './themes/default';
import fontWeightBold from './fontWeight/bold';
import variables from './variables';
import colors from './colors';
import spacing from './utilities/spacing';
import sizing from './utilities/sizing';
import flex from './utilities/flex';
import display from './utilities/display';
import overflow from './utilities/overflow';
import whiteSpace from './utilities/whiteSpace';
import wordBreak from './utilities/wordBreak';
import textInputAlignSelf from './utilities/textInputAlignSelf';

const styles = {
    // Add all of our utility and helper styles
    ...spacing,
    ...sizing,
    ...flex,
    ...display,
    ...overflow,
    ...wordBreak,
    ...whiteSpace,

    link: {
        color: themeColors.link,
        textDecorationColor: themeColors.link,
    },

    h1: {
        color: themeColors.heading,
        fontFamily: fontFamily.GTA_BOLD,
        fontSize: variables.fontSizeh1,
        fontWeight: fontWeightBold,
    },

    h3: {
        fontFamily: fontFamily.GTA_BOLD,
        fontSize: variables.fontSizeNormal,
        fontWeight: fontWeightBold,
    },

    h4: {
        fontFamily: fontFamily.GTA_BOLD,
        fontSize: variables.fontSizeLabel,
        fontWeight: fontWeightBold,
    },

    textP: {
        color: themeColors.text,
        fontFamily: fontFamily.GTA,
        fontSize: variables.fontSizeNormal,
        lineHeight: 20,
    },

    textLabel: {
        color: themeColors.text,
        fontSize: variables.fontSizeLabel,
        lineHeight: 18,
    },

    textMicro: {
        fontSize: variables.fontSizeSmall,
    },

    textMicroBold: {
        color: themeColors.text,
        fontWeight: fontWeightBold,
        fontFamily: fontFamily.GTA_BOLD,
        fontSize: variables.fontSizeSmall,
    },

    textLarge: {
        fontSize: variables.fontSizeLarge,
    },

    textStrong: {
        fontFamily: fontFamily.GTA_BOLD,
        fontWeight: fontWeightBold,
    },

    textDecorationNoLine: {
        textDecorationLine: 'none',
    },

    colorReversed: {
        color: themeColors.textReversed,
    },

    colorMutedReversed: {
        color: themeColors.textMutedReversed,
    },

    colorMuted: {
        color: themeColors.textSupporting,
    },

    colorHeading: {
        color: themeColors.heading,
    },

    button: {
        backgroundColor: themeColors.buttonDefaultBG,
        borderRadius: variables.componentBorderRadius,
        height: variables.componentSizeNormal,
        justifyContent: 'center',
        paddingHorizontal: 12,
    },

    buttonText: {
        color: themeColors.heading,
        fontFamily: fontFamily.GTA_BOLD,
        fontSize: variables.fontSizeLabel,
        fontWeight: fontWeightBold,
        textAlign: 'center',
    },

    buttonSmall: {
        height: variables.componentSizeSmall,
        paddingTop: 6,
        paddingRight: 10,
        paddingBottom: 6,
        paddingLeft: 10,
    },

    buttonSmallText: {
        fontSize: variables.fontSizeSmall,
        lineHeight: 16,
    },

    buttonSuccess: {
        backgroundColor: themeColors.buttonSuccessBG,
        borderWidth: 0,
    },

    buttonSuccessHovered: {
        backgroundColor: themeColors.buttonSuccessHoveredBG,
        borderWidth: 0,
    },

    buttonDisable: {
        backgroundColor: themeColors.buttonDisabledBG,
        borderWidth: 0,
    },

    buttonConfirm: {
        margin: 20,
    },

    buttonConfirmText: {
        paddingLeft: 20,
        paddingRight: 20,
    },

    buttonSuccessText: {
        color: themeColors.textReversed,
    },

    hoveredComponentBG: {
        backgroundColor: themeColors.componentBGHover,
    },

    touchableButtonImage: {
        alignItems: 'center',
        height: variables.componentSizeNormal,
        justifyContent: 'center',
        marginRight: 8,
        width: variables.componentSizeNormal,
    },

    picker: {
        inputIOS: {
            fontFamily: fontFamily.GTA,
            fontSize: variables.fontSizeNormal,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderRadius: variables.componentBorderRadius,
            borderWidth: 1,
            borderColor: themeColors.border,
            color: themeColors.text,
            paddingRight: 30,
        },
        inputWeb: {
            fontFamily: fontFamily.GTA,
            fontSize: variables.fontSizeNormal,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderRadius: variables.componentBorderRadius,
            borderColor: themeColors.border,
            color: themeColors.text,
            paddingRight: 30,
            appearance: 'none',
        },
        inputAndroid: {
            fontFamily: fontFamily.GTA,
            fontSize: variables.fontSizeNormal,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 1,
            borderRadius: variables.componentBorderRadius,
            borderColor: themeColors.border,
            color: themeColors.text,
            paddingRight: 30,
        },
        iconContainer: {
            top: 12,
            right: 12,
            pointerEvents: 'none',
        },
    },

    pill: {
        borderRadius: 14,
        backgroundColor: themeColors.pillBG,
        height: variables.componentSizeSmall,
        flexDirection: 'row',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 7,
        paddingRight: 7,
        alignItems: 'center',
    },

    pillText: {
        color: themeColors.text,
        weight: '400',
        fontSize: variables.fontSizeSmall,
        lineHeight: 16,
        marginRight: 4,
        userSelect: 'none',
        maxWidth: 144,
        ...whiteSpace.noWrap,
    },

    pillCancelIcon: {
        width: 12,
        height: 12,
    },

    headerText: {
        color: themeColors.heading,
        fontFamily: fontFamily.GTA_BOLD,
        fontSize: variables.fontSizeNormal,
        fontWeight: fontWeightBold,
    },

    reportOptions: {
        marginLeft: 8,
    },

    typingIndicator: {
        height: 15,
        marginBottom: 5,
        marginTop: 5,
    },

    typingIndicatorSubText: {
        color: themeColors.textSupporting,
        fontFamily: fontFamily.GTA,
        fontSize: variables.fontSizeSmall,
        marginLeft: 48,
    },

    // Actions
    actionAvatar: {
        borderRadius: 20,
        marginRight: 8,
    },

    textInput: {
        backgroundColor: themeColors.componentBG,
        borderRadius: variables.componentBorderRadius,
        height: variables.componentSizeNormal,
        borderColor: themeColors.border,
        borderWidth: 1,
        color: themeColors.text,
        fontFamily: fontFamily.GTA,
        fontSize: variables.fontSizeNormal,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 10,
        paddingBottom: 10,
        textAlignVertical: 'center',
    },

    textInputReversed: addOutlineWidth({
        backgroundColor: themeColors.heading,
        borderColor: themeColors.text,
        color: themeColors.textReversed,
    }, 0),

    textInputReversedFocus: {
        borderColor: themeColors.icon,
    },

    noOutline: addOutlineWidth({}, 0),

    formLabel: {
        fontFamily: fontFamily.GTA_BOLD,
        fontWeight: fontWeightBold,
        color: themeColors.heading,
        fontSize: variables.fontSizeLabel,
        lineHeight: 18,
        marginBottom: 8,
    },

    formError: {
        color: themeColors.textError,
        fontSize: variables.fontSizeLabel,
        lineHeight: 18,
        marginBottom: 4,
    },

    formSuccess: {
        color: themeColors.textSuccess,
        fontSize: variables.fontSizeLabel,
        lineHeight: 18,
        marginBottom: 4,
    },

    signInPage: {
        backgroundColor: themeColors.sidebar,
        padding: 20,
        minHeight: '100%',
    },

    signInPageLogo: {
        height: variables.componentSizeLarge,
        marginBottom: 24,
    },

    signInPageLogoNative: {
        alignItems: 'center',
        height: variables.componentSizeLarge,
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
        marginTop: 20,
    },

    signinWelcomeScreenshot: {
        height: 354,
        width: 295,
    },

    signinWelcomeScreenshotWide: {
        height: 592,
        width: 295,
    },

    genericView: {
        backgroundColor: themeColors.heading,
        height: '100%',
    },

    signInPageInner: {
        paddingTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 800,
        width: '100%',
    },

    signInPageInnerNative: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 295,
        width: '100%',
    },

    loginFormContainer: {
        maxWidth: 295,
        width: '100%',
    },

    // Sidebar Styles
    sidebar: {
        backgroundColor: themeColors.sidebar,
        height: '100%',
    },

    sidebarFooter: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: 84,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        width: '100%',
    },

    sidebarAvatar: {
        backgroundColor: themeColors.icon,
        borderRadius: 20,
        height: variables.componentSizeNormal,
        width: variables.componentSizeNormal,
    },

    statusIndicator: {
        borderColor: themeColors.sidebar,
        borderRadius: 6,
        borderWidth: 2,
        position: 'absolute',
        right: -1,
        bottom: -1,
        height: 12,
        width: 12,
        zIndex: 10,
    },
    statusIndicatorOnline: {
        backgroundColor: themeColors.online,
    },

    statusIndicatorOffline: {
        backgroundColor: themeColors.offline,
    },

    floatingActionButton: {
        backgroundColor: themeColors.buttonSuccessBG,
        position: 'absolute',
        height: variables.componentSizeLarge,
        width: variables.componentSizeLarge,
        right: 20,
        bottom: 34,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },

    sidebarFooterUsername: {
        color: themeColors.heading,
        fontSize: variables.fontSizeLabel,
        fontWeight: '700',
        width: 200,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        ...whiteSpace.noWrap,
    },

    sidebarFooterLink: {
        color: themeColors.textSupporting,
        fontSize: variables.fontSizeSmall,
        textDecorationLine: 'none',
        fontFamily: fontFamily.GTA,
        lineHeight: 20,
    },

    sidebarListContainer: {
        scrollbarWidth: 'none',
        paddingBottom: 4,
    },

    sidebarListItem: {
        justifyContent: 'center',
        textDecorationLine: 'none',
    },

    createMenuPosition: {
        left: 18,
        bottom: 100,
    },

    createMenuItem: {
        flexDirection: 'row',
        borderRadius: 0,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },

    createMenuIcon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    createMenuText: {
        fontFamily: fontFamily.GTA_BOLD,
        fontSize: variables.fontSizeNormal,
        fontWeight: fontWeightBold,
        color: themeColors.heading,
    },

    chatLinkRowPressable: {
        minWidth: 0,
        textDecorationLine: 'none',
        flex: 1,
    },

    sidebarLink: {
        textDecorationLine: 'none',
    },

    sidebarLinkInner: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 64,
        paddingTop: 12,
        paddingRight: 20,
        paddingBottom: 12,
        paddingLeft: 20,
    },

    sidebarLinkText: {
        color: themeColors.text,
        fontSize: variables.fontSizeNormal,
        textDecorationLine: 'none',
        overflow: 'hidden',
    },

    sidebarLinkHover: {
        backgroundColor: themeColors.sidebarHover,
    },

    sidebarLinkActive: {
        backgroundColor: themeColors.border,
        textDecorationLine: 'none',
    },

    sidebarLinkTextUnread: {
        fontWeight: '700',
        color: themeColors.heading,
    },

    sidebarLinkActiveText: {
        color: themeColors.text,
        fontSize: variables.fontSizeNormal,
        textDecorationLine: 'none',
        overflow: 'hidden',
    },

    optionItemAvatarNameWrapper: {
        minWidth: 0,
        flex: 1,
    },

    optionDisplayName: {
        fontFamily: fontFamily.GTA,
        height: 18,
        lineHeight: 18,
        ...whiteSpace.noWrap,
    },

    optionAlternateText: {
        color: themeColors.textSupporting,
        fontFamily: fontFamily.GTA,
        fontSize: variables.fontSizeLabel,
        height: 16,
        lineHeight: 16,
    },

    // App Content Wrapper styles
    appContentWrapper: {
        backgroundColor: themeColors.appBG,
        color: themeColors.text,
    },

    appContent: {
        backgroundColor: themeColors.appBG,
        overflow: 'hidden',
    },

    appContentHeader: {
        borderBottomWidth: 1,
        borderColor: themeColors.border,
        height: variables.contentHeaderHeight,
        justifyContent: 'center',
        display: 'flex',
        paddingRight: 20,
    },

    appContentHeaderTitle: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    LHNToggle: {
        alignItems: 'center',
        height: variables.contentHeaderHeight,
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 20,
    },

    LHNToggleIcon: {
        height: 15,
        width: 18,
    },

    chatContent: {
        flex: 4,
        justifyContent: 'flex-end',
    },

    chatContentScrollView: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingVertical: 16,
    },

    chatContentEmpty: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
    },

    // Chat Item
    chatItem: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
    },

    chatItemRightGrouped: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        position: 'relative',
        marginLeft: 48,
    },

    chatItemRight: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        position: 'relative',
    },

    chatItemMessageHeader: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    chatItemMessageHeaderSender: {
        color: themeColors.heading,
        fontFamily: fontFamily.GTA_BOLD,
        fontSize: variables.fontSizeNormal,
        fontWeight: fontWeightBold,
        lineHeight: 20,
        paddingRight: 5,
        paddingBottom: 4,
        ...wordBreak.breakWord,
    },

    chatItemMessageHeaderTimestamp: {
        color: themeColors.textSupporting,
        fontSize: variables.fontSizeSmall,
        height: 24,
        lineHeight: 20,
    },

    chatItemMessage: {
        color: themeColors.text,
        fontSize: variables.fontSizeNormal,
        fontFamily: fontFamily.GTA,
        lineHeight: 20,
        marginTop: -2,
        marginBottom: -2,
        ...whiteSpace.preWrap,
        ...wordBreak.breakWord,
    },

    chatItemCompose: {
        minHeight: 65,
        marginBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
    },

    chatItemComposeBoxColor: {
        borderColor: themeColors.border,
    },

    chatItemComposeBoxFocusedColor: {
        borderColor: themeColors.borderFocus,
    },

    chatItemComposeBox: {
        backgroundColor: themeColors.componentBG,
        borderWidth: 1,
        borderRadius: variables.componentBorderRadius,
        minHeight: variables.componentSizeNormal,
    },

    textInputCompose: addOutlineWidth({
        backgroundColor: themeColors.componentBG,
        borderColor: themeColors.border,
        color: themeColors.text,
        fontFamily: fontFamily.GTA,
        fontSize: variables.fontSizeNormal,
        borderWidth: 0,
        borderRadius: 0,
        height: 'auto',

        // On Android, multiline TextInput with height: 'auto' will show extra padding unless they are configured with
        // paddingVertical: 0, alignSelf: 'center', and textAlignVertical: 'center'

        paddingHorizontal: 8,
        marginVertical: 5,
        paddingVertical: 0,
        ...textInputAlignSelf.center,
        textAlignVertical: 'center',
    }, 0),

    chatItemSubmitButton: {
        alignSelf: 'flex-end',
        borderRadius: 6,
        height: 32,
        paddingTop: 6,
        paddingRight: 6,
        paddingBottom: 6,
        paddingLeft: 6,
        margin: 3,
        justifyContent: 'center',
    },

    chatItemAttachButton: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderRightColor: themeColors.border,
        borderRightWidth: 1,
        height: 26,
        marginBottom: 6,
        marginTop: 6,
        justifyContent: 'center',
        width: 39,
    },

    chatItemAttachmentPlaceholder: {
        backgroundColor: themeColors.sidebar,
        borderColor: themeColors.border,
        borderWidth: 1,
        borderRadius: variables.componentBorderRadius,
        height: 150,
        textAlign: 'center',
        verticalAlign: 'middle',
        width: 200,
    },

    chatSwticherPillWrapper: {
        marginTop: 5,
        marginRight: 4,
    },

    navigationMenuOpenAbsolute: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 2,
    },

    sidebarVisible: {
        borderRightWidth: 1,
    },

    sidebarHidden: {
        width: 0,
        borderRightWidth: 0,
    },

    singleAvatar: {
        height: 24,
        width: 24,
        backgroundColor: themeColors.icon,
        borderRadius: 24,
    },

    secondAvatar: {
        position: 'absolute',
        right: -13,
        bottom: -14,
        borderColor: 'transparent',
        borderWidth: 2,
    },

    avatarNormal: {
        height: variables.componentSizeNormal,
        width: variables.componentSizeNormal,
        backgroundColor: themeColors.icon,
        borderRadius: variables.componentSizeNormal,
    },

    avatarText: {
        backgroundColor: themeColors.icon,
        borderRadius: 24,
        height: 24,
        width: 24,
    },

    avatarInnerText: {
        color: themeColors.textReversed,
        fontSize: variables.fontSizeSmall,
        lineHeight: 24,
        marginLeft: -3,
        textAlign: 'center',
    },

    avatarSpace: {
        top: 3,
        left: 3,
    },

    avatar: {
        backgroundColor: themeColors.sidebar,
    },

    focusedAvatar: {
        backgroundColor: themeColors.border,
    },

    emptyAvatar: {
        marginRight: variables.componentSizeNormal - 24,
        height: 40,
        width: 40,
    },

    modalViewContainer: {
        alignItems: 'center',
        flex: 1,
    },

    borderBottom: {
        borderBottomWidth: 1,
        borderColor: themeColors.border,
    },

    headerBar: {
        overflow: 'hidden',
        justifyContent: 'center',
        display: 'flex',
        paddingLeft: 20,
        height: variables.contentHeaderHeight,
        width: '100%',
    },

    imageModalPDF: {
        flex: 1,
        backgroundColor: themeColors.modalBackground,
    },
    PDFView: {
        flex: 1,
        backgroundColor: themeColors.modalBackground,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden',
        overflowY: 'auto',
    },

    modalCenterContentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeColors.modalBackdrop,
    },

    imageModalImageCenterContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },

    defaultAttachmentView: {
        backgroundColor: themeColors.sidebar,
        borderRadius: variables.componentBorderRadius,
        borderWidth: 1,
        borderColor: themeColors.border,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },

    notFoundSafeArea: {
        flex: 1,
        backgroundColor: themeColors.heading,
    },

    notFoundView: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        justifyContent: 'space-between',
    },

    notFoundLogo: {
        width: 202,
        height: 63,
    },

    notFoundContent: {
        alignItems: 'center',
    },

    notFoundTextHeader: {
        color: colors.blue,
        fontFamily: fontFamily.GTA_BOLD,
        fontWeight: fontWeightBold,
        fontSize: 150,
    },

    notFoundTextBody: {
        color: themeColors.componentBG,
        fontFamily: fontFamily.GTA_BOLD,
        fontWeight: fontWeightBold,
        fontSize: 15,
    },

    notFoundButtonText: {
        color: colors.blue,
        fontFamily: fontFamily.GTA_BOLD,
        fontWeight: fontWeightBold,
        fontSize: 15,
    },

    defaultModalContainer: {
        backgroundColor: themeColors.componentBG,
        borderColor: colors.transparent,
    },

    settingsPageBackground: {
        flexDirection: 'column',
        width: '100%',
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    settingsPageBody: {
        width: '100%',
        justifyContent: 'space-around',
    },

    settingsPageColumn: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    settingsPageContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },

    avatarLarge: {
        width: 80,
        height: 80,
    },

    statusIndicatorLarge: {
        borderColor: themeColors.componentBG,
        borderRadius: 8,
        borderWidth: 2,
        position: 'absolute',
        right: 4,
        bottom: 4,
        height: 16,
        width: 16,
        zIndex: 10,
    },

    displayName: {
        fontSize: variables.fontSizeLarge,
        fontFamily: fontFamily.GTA_BOLD,
        fontWeight: fontWeightBold,
        color: themeColors.heading,
    },

    settingsLoginName: {
        fontSize: variables.fontSizeLabel,
        fontFamily: fontFamily.GTA,
        color: themeColors.textSupporting,
    },

    pageWrapper: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
    },

    selectCircle: {
        width: variables.componentSizeSmall,
        height: variables.componentSizeSmall,
        borderColor: themeColors.border,
        borderWidth: 1,
        borderRadius: variables.componentSizeSmall / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeColors.componentBG,
        marginLeft: 8,
    },

    unreadIndicatorContainer: {
        position: 'absolute',
        top: -10,
        left: 0,
        width: '100%',
        height: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    unreadIndicatorLine: {
        height: 1,
        backgroundColor: themeColors.unreadIndicator,
        flexGrow: 1,
        marginRight: 8,
        opacity: 0.5,
    },

    unreadIndicatorText: {
        color: themeColors.unreadIndicator,
        fontFamily: fontFamily.GTA_BOLD,
        fontSize: variables.fontSizeSmall,
        fontWeight: fontWeightBold,
    },

    flipUpsideDown: {
        transform: [{rotate: '180deg'}],
    },

    profilePageContainer: {
        justifyContent: 'space-between',
        width: '100%',
        flex: 1,
    },

    profilePageSectionContainer: {
        alignSelf: 'flex-start',
    },

    profilePageSectionVersion: {
        alignSelf: 'center',
        color: themeColors.textSupporting,
        fontSize: variables.fontSizeSmall,
        height: 24,
        lineHeight: 20,
    },
};

const baseCodeTagStyles = {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 4,
    borderColor: themeColors.border,
    backgroundColor: themeColors.textBackground,
};

const webViewStyles = {
    // As of react-native-render-html v6, don't declare distinct styles for
    // custom renderers, the API for custom renderers has changed. Declare the
    // styles in the below "tagStyles" instead. If you need to reuse those
    // styles from the renderer, just pass the "style" prop to the underlying
    // component.
    tagStyles: {
        em: {
            fontFamily: fontFamily.GTA_ITALIC,
            fontStyle: italic,
        },

        del: {
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
        },

        strong: {
            fontFamily: fontFamily.GTA_BOLD,
            fontWeight: fontWeightBold,
        },

        a: styles.link,

        blockquote: {
            borderLeftColor: themeColors.border,
            borderLeftWidth: 4,
            paddingLeft: 12,
            marginTop: 4,
            marginBottom: 4,

            // Overwrite default HTML margin for blockquotes
            marginLeft: 0,
        },

        pre: {
            ...baseCodeTagStyles,
            paddingTop: 4,
            paddingBottom: 5,
            paddingRight: 8,
            paddingLeft: 8,
            fontFamily: fontFamily.MONOSPACE,
        },

        code: {
            ...baseCodeTagStyles,
            paddingLeft: 5,
            paddingRight: 5,
            paddingBottom: 2,
            alignSelf: 'flex-start',
            fontFamily: fontFamily.MONOSPACE,
        },

        img: {
            borderColor: themeColors.border,
            borderRadius: variables.componentBorderRadius,
            borderWidth: 1,
        },
    },

    baseFontStyle: {
        color: themeColors.text,
        fontSize: variables.fontSizeNormal,
        fontFamily: fontFamily.GTA,
    },
};

/**
 * Takes safe area insets and returns padding to use for a View
 *
 * @param {Object} insets
 * @returns {Object}
 */
function getSafeAreaPadding(insets) {
    return {
        paddingTop: insets.top,
        paddingBottom: insets.bottom * variables.safeInsertPercentage,
    };
}

/**
 * Takes safe area insets and returns margin to use for a View
 *
 * @param {Object} insets
 * @returns {Object}
 */
function getSafeAreaMargins(insets) {
    return {marginBottom: insets.bottom * variables.safeInsertPercentage};
}

/**
 * Return navigation menu styles.
 *
 * @param {Number} windowWidth
 * @param {Boolean} isSmallScreenWidth
 * @returns {Object}
 */
function getNavigationMenuStyle(windowWidth, isSmallScreenWidth) {
    return isSmallScreenWidth
        ? {
            ...styles.navigationMenuOpenAbsolute,
            width: windowWidth,
        }
        : {
            borderColor: themeColors.border,
            borderRightWidth: 1,
            width: variables.sideBarWidth,
        };
}

export default styles;
export {
    getSafeAreaPadding, getSafeAreaMargins, webViewStyles, getNavigationMenuStyle,
};
