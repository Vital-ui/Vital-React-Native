import * as React from "react";
import SVGClose from "./x.svg";
import {
    Platform,
    LayoutAnimation,
    Modal,
    View,
    Pressable,
    Dimensions,
    StyleSheet,
    UIManager,
    LayoutChangeEvent
} from "react-native";
import ThemeContext from "../context/context";
import type {DialogProps} from "./types";

export default function Dialog(props: DialogProps) {
    const [shown, setShown] = React.useState(false);
    const [height, setHeight] = React.useState(-30);
    if (Platform.OS === "android") {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const openModal = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
                200,
                LayoutAnimation.Types.easeInEaseOut,
                LayoutAnimation.Properties.opacity,
            ),
        );
        setShown(true);
    };
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
    const closeModal = () => {
        setShown(false);
        if (props.onClose) {
            props.onClose();
        }
    };
    const layout = (event: LayoutChangeEvent) => {
        const {height} = event.nativeEvent.layout;
        setHeight(-1 * height / 2);
    };
    return (
        <ThemeContext.Consumer>
            {
                (context) => <View style={props.style}>
                    <Modal
                        animationType={"none"}
                        transparent={true}
                        visible={props.visible ? props.visible : shown}
                        hardwareAccelerated={true}
                        statusBarTranslucent={true}
                    >
                        <Pressable
                            style={[styles.modal, {backgroundColor: "#30303add"}]}
                            onPress={props.visible !== undefined ? props.onBackDropPress ? props.onBackDropPress : () => {
                                // pass
                            } : closeModal}>
                        </Pressable>
                        <View
                            onLayout={layout}
                            style={[styles.modalContent, {
                                transform: [{translateX: -Dimensions.get("screen").width * 11 / 24}, {translateY: height}],
                            }]}
                        >
                            {props.header &&
                                <View
                                    style={[styles.modalHeader, {backgroundColor: props.headerColor ? props.headerColor : context.theme.Header}]}>
                                    <View style={styles.modalHeaderText}>
                                        {props.title}
                                    </View>
                                    <Pressable
                                        onPress={props.visible !== undefined ? props.onRequestClose ? props.onRequestClose : () => {
                                            // pass
                                        } : closeModal}
                                        style={styles.modalHeaderBtn}
                                    >
                                        <SVGClose fill={"#888888"} height={24} width={24}/>
                                    </Pressable>
                                </View>
                            }
                            <View
                                style={[styles.modalBody, {backgroundColor: props.bodyColor ? props.bodyColor : context.theme.Body}]}>
                                {props.children}
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        onPress={props.visible !== undefined ? props.onRequestOpen ? props.onRequestOpen : () => {
                            // pass
                        } : openModal}
                        onStartShouldSetResponderCapture={() => props.visible === undefined || !!props.onRequestOpen}>
                        {props.actionFrom}
                    </Pressable>
                </View>
            }
        </ThemeContext.Consumer>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: Dimensions.get("screen").width * 11 / 12,
        borderRadius: Dimensions.get("screen").width * 0.02,
        elevation: 50,
        overflow: "hidden",
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: Dimensions.get("window").width * 0.05,
    },
    modalHeaderText: {
        flex: 11,
    },
    modalHeaderBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    modalBody: {
        padding: Dimensions.get("window").width * 0.05,
    },
});
