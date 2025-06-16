import React from "react";
import {Dimensions, LayoutChangeEvent, StyleSheet} from "react-native";
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {ToastProps} from "./types";

const Toast = (props: ToastProps) => {
    const left = Dimensions.get("window").width / 2;
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(100);
    const active = useSharedValue(false);
    const toastStyle = useAnimatedStyle(() => {
        return {
            top: withTiming(active.value ? props.top ? props.top : 20 : -height, {
                duration: 500,
                easing: active.value ? Easing.in(Easing.elastic(1.5)) : Easing.out(Easing.elastic(1.5)),
            }),

            position: "absolute",
            left: left,
            transform: [{translateX: -width / 2}],
            zIndex: 999,
            overflow: "hidden"
        };
    });

    const onLayout = (event: LayoutChangeEvent) => {
        if (width == 0) {
            setWidth(event.nativeEvent.layout.width);
            setHeight(event.nativeEvent.layout.height+10);
        }
    };

    React.useEffect(() => {
        active.value = props.open;
        if (!props.open) {
            setTimeout(() => {
                setWidth(0);
            }, 500);
        }
    }, [props.open]);

    return (
        <Animated.View style={[style.toastContainer, props.toastStyle, toastStyle]} onLayout={onLayout}>
            {props.children}
        </Animated.View>
    );
};

export default Toast;

const style = StyleSheet.create({
    toastContainer: {
        backgroundColor: "#1F1F1F",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 15,
        color: "#fff",
        maxWidth: 2 * Dimensions.get("window").width / 3,
    }
});


