import React from "react";
import {Pressable, View} from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";
import type {DrawerProps} from "./types";
import {drawerStyles} from "./styles";

const Drawer = (props: DrawerProps) => {
    const [mainContainer, setMainContainer] = React.useState<any>();
    const size = props.width || "50%";
    const bgColor = props.backgroundColor ?? "#fff";
    let containerStyle = {};

    const containerAnimation = useAnimatedStyle(() => {
        const duration = 500;
        const easing = Easing.out(Easing.exp);
        switch (props.position) {
            case "left":
                return {
                    left: withTiming((props.open ? 0 : -100) + "%", {
                        duration,
                        easing,
                    }),
                };
            case "top":
                return {
                    top: withTiming((props.open ? 0 : -100) + "%", {
                        duration,
                        easing,
                    }),
                };
            case "bottom":
                let openPos = "50%";
                if (size) {
                    openPos = 100 - parseInt(size.replace("%", "")) + "%";
                }
                return {
                    top: withTiming(props.open ? openPos : "100%", {
                        duration,
                        easing,
                    }),
                };
            default:
                return {
                    right: withTiming((props.open ? 0 : -100) + "%", {
                        duration,
                        easing,
                    }),
                };
        }
    });

    const backdropAnimation = useAnimatedStyle(() => ({
        backgroundColor: withTiming("#d0d0d0" + (props.open ? "44" : "00"), {
            duration: 500,
            easing: Easing.out(Easing.exp),
        }),
    }));

    switch (props.position) {
        case "left":
            containerStyle = {
                ...drawerStyles.drawerLeft,
                width: size,
            };
            break;
        case "top":
            containerStyle = {
                ...drawerStyles.drawerTop,
                width: size,
            };
            break;
        case "bottom":
            containerStyle = {
                ...drawerStyles.drawerBottom,
                width: size,
            };
            break;
        default:
            containerStyle = {
                ...drawerStyles.drawerRight,
                width: size,
            };
            break;
    }
    const setMainContainerPosition = () => {
        const position = props.open ? 0 : "-100%";
        switch (props.position) {
            case "left":
                setMainContainer({left: position});
                break;
            case "top":
                setMainContainer({top: position});
                break;
            case "bottom":
                setMainContainer({top: props.open ? 0 : "100%"});
                break;
            default:
                setMainContainer({right: position});
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

    return (
        <View style={[drawerStyles.container, mainContainer]}>
            <Pressable
                onPress={() =>
                    props.onBackdropPress ? props.onBackdropPress() : {}
                }
                style={[drawerStyles.container, mainContainer]}
            >
                <Animated.View
                    style={[drawerStyles.heightWidthFull, backdropAnimation]}
                />
            </Pressable>
            <Animated.View
                style={[
                    containerStyle,
                    containerAnimation,
                    {
                        backgroundColor: bgColor,
                    },
                ]}
            >
                {props.children}
            </Animated.View>
        </View>
    );
};

export default Drawer;
