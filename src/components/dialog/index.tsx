import * as React from "react";
import SVGClose from "./assets/x.svg";
import {
    Platform,
    LayoutAnimation,
    Modal,
    View,
    Pressable,
    Dimensions,
    UIManager,
    type LayoutChangeEvent,
} from "react-native";
import ThemeContext from "../context/context";
import type {DialogProps} from "./types";
import {useContext} from "react";
import {closeModal, openModal} from "./helpers";
import {componentStyles} from "./styles";

export default function Dialog(props: DialogProps) {
    const {theme} = useContext(ThemeContext);
    const [shown, setShown] = React.useState(false);
    const [height, setHeight] = React.useState(-30);
    const {
        visible,
        onClose,
        styles,
        onBackDropPress,
        header,
        title,
        onRequestClose,
        children,
        onRequestOpen,
        actionFrom
    } = props;

    if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    React.useEffect(() => {
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
                200,
                LayoutAnimation.Types.easeInEaseOut,
                LayoutAnimation.Properties.opacity,
            ),
        );
        if (visible !== undefined) {
            setShown(visible);
        }
    }, [visible]);

    const layout = (event: LayoutChangeEvent) => {
        const {height} = event.nativeEvent.layout;
        setHeight(-1 * height / 2);
    };
    return (
        <View style={styles?.style}>
            <Modal
                animationType={"none"}
                transparent
                visible={visible ?? shown}
                hardwareAccelerated
                statusBarTranslucent
            >
                <Pressable
                    style={componentStyles.modal}
                    onPress={
                        visible !== undefined
                            ? onBackDropPress ?? (() => {})
                            : () => closeModal(setShown, onClose)
                    }>
                </Pressable>
                <View
                    onLayout={layout}
                    style={[componentStyles.modalContent, {
                        transform: [{translateX: -Dimensions.get("screen").width * 11 / 24}, {translateY: height}],
                    }]}
                >
                    {header &&
                                <View
                                    style={[componentStyles.modalHeader, {backgroundColor: styles?.headerColor ?? theme.Header}]}>
                                    <View style={componentStyles.modalHeaderText}>
                                        {title}
                                    </View>
                                    <Pressable
                                        onPress={
                                            visible !== undefined
                                                ? onRequestClose ?? (() => {})
                                                : () => closeModal(setShown, onClose)
                                        }
                                        style={componentStyles.modalHeaderBtn}
                                    >
                                        <SVGClose fill={"#888888"} height={24} width={24}/>
                                    </Pressable>
                                </View>
                    }
                    <View
                        style={[componentStyles.modalBody, {backgroundColor: styles?.bodyColor ?? theme.Body}]}>
                        {children}
                    </View>
                </View>
            </Modal>
            <Pressable
                onPress={
                    visible !== undefined
                        ? onRequestOpen ?? (() => {})
                        : () => openModal(setShown)
                }
                onStartShouldSetResponderCapture={() => visible === undefined || !!onRequestOpen}>
                {actionFrom}
            </Pressable>
        </View>
    );
}


