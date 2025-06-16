import React from "react";
import {Pressable, StyleSheet, View} from "react-native";
import Animated, {Easing, useAnimatedStyle, withTiming} from "react-native-reanimated";
import {DrawerProps} from "./types";

const Drawer = (props: DrawerProps) => {
    const [mainContainer, setMainContainer] = React.useState<any>();
    let containerStyle = {};
    switch (props.position) {
        case "left":
            containerStyle = {...styles.drawerLeft, width: props.width ? props.width : "50%"};
            break;
        case "top":
            containerStyle = {...styles.drawerTop, height: props.width ? props.width : "50%"};
            break;
        case "bottom":
            containerStyle = {...styles.drawerBottom, height: props.width ? props.width : "50%"};
            break;
        default:
            containerStyle = {...styles.drawerRight, width: props.width ? props.width : "50%"};
            break;
    }
    const setMainContainerPosition = () => {
        switch (props.position) {
            case "left":
                setMainContainer({left: props.open ? 0 : "-100%"});
                break;
            case "top":
                setMainContainer({top: props.open ? 0 : "-100%"});
                break;
            case "bottom":
                setMainContainer({top: props.open ? 0 : "100%"});
                break;
            default:
                setMainContainer({right: props.open ? 0 : "-100%"});
                break;
        }
    };

    React.useEffect(() => {
        if (!props.open) {
            setTimeout(() => {
                setMainContainerPosition();
            }, 500);
        } else {
            setMainContainerPosition();
        }
    }, [props.open]);
    const containerAnimation = useAnimatedStyle(() => {
        switch (props.position) {
            case "left":
                return {
                    left: withTiming((props.open ? 0 : -100) + "%", {
                        duration: 500,
                        easing: Easing.out(Easing.exp),
                    }),
                };
            case "top":
                return {
                    "top": withTiming(((props.open ? 0 : -100) + "%"), {
                        duration: 500,
                        easing: Easing.out(Easing.exp),
                    }),
                };
            case "bottom":
                let openPos = "50%";
                if (props.width) {
                    openPos = (100 - parseInt(props.width.replace("%", ""))) + "%";
                }
                return {
                    "top": withTiming(props.open ? openPos : "100%", {
                        duration: 500,
                        easing: Easing.out(Easing.exp),
                    }),
                };
            default:
                return {
                    "right": withTiming((props.open ? 0 : -100) + "%", {
                        duration: 500,
                        easing: Easing.out(Easing.exp),
                    }),
                };
        }
    });

    const backdropAnimation = useAnimatedStyle(() => {
        return {
            backgroundColor: withTiming("#d0d0d0" + (props.open ? "44" : "00"), {
                duration: 500,
                easing: Easing.out(Easing.exp),
            }),
        };
    });

    return (
        <View style={[styles.container, mainContainer]}>
            <Pressable
                onPress={() => props.onBackdropPress ? props.onBackdropPress() : {}}
                style={[styles.container, mainContainer]}
            >
                <Animated.View style={[{height: "100%", width: "100%"}, backdropAnimation]}/>
            </Pressable>
            <Animated.View
                style={[containerStyle, containerAnimation, {
                    backgroundColor: props.backgroundColor ? props.backgroundColor : "#fff",

                }]}
            >
                {props.children}
            </Animated.View>
        </View>
    );
};

export default Drawer;


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
    },
    drawerRight: {
        position: "absolute",
        right: "-100%",
        top: 0,
        height: "100%",
        width: "50%",
        elevation: 5,
        backgroundColor: "#fff"
    },
    drawerLeft: {
        position: "absolute",
        left: "-100%",
        top: 0,
        height: "100%",
        width: "50%",
        elevation: 5,
        backgroundColor: "#fff"
    },
    drawerTop: {
        position: "absolute",
        left: 0,
        top: "-100%",
        width: "100%",
        height: "50%",
        elevation: 5,
        backgroundColor: "#fff"
    },
    drawerBottom: {
        position: "absolute",
        left: 0,
        top: "100%",
        width: "100%",
        height: "50%",
        elevation: 5,
        backgroundColor: "#fff"
    },
});
