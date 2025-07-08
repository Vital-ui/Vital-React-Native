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
import {styles} from "./styles";

export default function Dialog(props: DialogProps) {
    const {theme} = useContext(ThemeContext);
    const [shown, setShown] = React.useState(false);
    const [height, setHeight] = React.useState(-30);
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
        if (props.visible !== undefined) {
            setShown(props.visible);
        }
    }, [props.visible]);

    const layout = (event: LayoutChangeEvent) => {
        const {height} = event.nativeEvent.layout;
        setHeight(-1 * height / 2);
    };
    return (
        <View style={props.style}>
            <Modal
                animationType={"none"}
                transparent
                visible={props.visible ?? shown}
                hardwareAccelerated
                statusBarTranslucent
            >
                <Pressable
                    style={styles.modal}
                    onPress={
                        props.visible !== undefined
                            ? props.onBackDropPress ?? (() => {})
                            : () => closeModal(setShown, props.onClose)
                    }>
                </Pressable>
                <View
                    onLayout={layout}
                    style={[styles.modalContent, {
                        transform: [{translateX: -Dimensions.get("screen").width * 11 / 24}, {translateY: height}],
                    }]}
                >
                    {props.header &&
                                <View
                                    style={[styles.modalHeader, {backgroundColor: props.headerColor ?? theme.Header}]}>
                                    <View style={styles.modalHeaderText}>
                                        {props.title}
                                    </View>
                                    <Pressable
                                        onPress={
                                            props.visible !== undefined
                                                ? props.onRequestClose ?? (() => {})
                                                : () => closeModal(setShown, props.onClose)
                                        }
                                        style={styles.modalHeaderBtn}
                                    >
                                        <SVGClose fill={"#888888"} height={24} width={24}/>
                                    </Pressable>
                                </View>
                    }
                    <View
                        style={[styles.modalBody, {backgroundColor: props.bodyColor ?? theme.Body}]}>
                        {props.children}
                    </View>
                </View>
            </Modal>
            <Pressable
                onPress={
                    props.visible !== undefined
                        ? props.onRequestOpen ?? (() => {})
                        : () => openModal(setShown)
                }
                onStartShouldSetResponderCapture={() => props.visible === undefined || !!props.onRequestOpen}>
                {props.actionFrom}
            </Pressable>
        </View>
    );
}


