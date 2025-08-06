import {
    type DimensionValue,
    type StyleProp,
    View,
    type ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import type {ProgressBarProps} from "./types";
import {progressBarStyles} from "./style";

const ProgressBar = (props: ProgressBarProps) => {
    const thickness = props.thickness ?? 5;
    const animationSpeed = props.animationSpeed ?? 1000;
    const bgColor = props.backgroundColor ?? "#EAEBEE";
    const vertical = props.vertical ?? false;
    const progress = useSharedValue(
        props.progress !== undefined ? props.progress * 100 : 75,
    );
    const start = props.vertical ? {x: 0.5, y: 0} : {x: 0, y: 0.5};
    const end = props.vertical ? {x: 0.5, y: 1} : {x: 1, y: 0.5};
    const percent: DimensionValue = "100%";

    const containerStyle: StyleProp<ViewStyle> = [
        progressBarStyles.container,
        vertical
            ? {height: percent, width: thickness, borderRadius: thickness}
            : {width: percent, height: thickness, borderRadius: thickness},
        {backgroundColor: bgColor},
    ];

    const progressBarStyle = useAnimatedStyle(() => {
        if (vertical) {
            return {
                height: withTiming(progress * 100 + "%", {
                    duration: animationSpeed,
                    easing: Easing.out(Easing.quad),
                }),
                width: "100%",
                position: "absolute",
                bottom: 0,
            };
        } else {
            return {
                width: withTiming(progress * 100 + "%", {
                    duration: animationSpeed,
                    easing: Easing.out(Easing.quad),
                }),
                height: "100%",
                position: "absolute",
                left: 0,
            };
        }
    }, [progress, animationSpeed, vertical]);

    return (
        <View style={containerStyle}>
            <Animated.View style={progressBarStyle}>
                <LinearGradient
                    colors={props.colors}
                    start={start}
                    end={end}
                    style={[
                        progressBarStyles.gradient,
                        {borderRadius: thickness},
                    ]}
                />
            </Animated.View>
        </View>
    );
};

export default ProgressBar;
