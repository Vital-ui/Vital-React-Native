import React from "react";
import {View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import type {ProgressBarProps} from "./types";

const ProgressBar = (props: ProgressBarProps) => {
    const height = props.thickness ? props.thickness : 5;
    const progress = useSharedValue(props.progress !== undefined ? props.progress * 100 : 75);
    const start = props.vertical ? {x: 0.5, y: 0} : {x: 0, y: 0.5};
    const end = props.vertical ? {x: 0.5, y: 1} : {x: 1, y: 0.5};

    const containerStyle = props.vertical ? {height: "100%", width: height} : {width: "100%", height: height};
    const progressBarStyle = useAnimatedStyle(() => {
        if (props.vertical)
            return {
                height: withTiming((props.progress !== undefined ? props.progress * 100 : 75) + "%", {
                    duration: props.animationSpeed !== undefined ? props.animationSpeed : 1000,
                    easing: Easing.out(Easing.quad),
                }),
                width: "100%"
            };
        else
            return {
                width: withTiming((props.progress !== undefined ? props.progress * 100 : 75) + "%", {
                    duration: props.animationSpeed !== undefined ? props.animationSpeed : 1000,
                    easing: Easing.out(Easing.quad),
                }),
                height: "100%"
            };
    });

    React.useEffect(() => {
        progress.value = props.progress;
    }, [props.progress]);

    return (
        <View style={[containerStyle, {
            borderRadius: height,
            backgroundColor: props.backgroundColor ? props.backgroundColor : "#EAEBEE"
        }]}>
            <Animated.View style={progressBarStyle}>
                <LinearGradient
                    colors={props.colors}
                    start={start}
                    end={end}
                    style={{borderRadius: height, height: "100%", width: "100%"}}
                />
            </Animated.View>
        </View>
    );
};

export default ProgressBar;
