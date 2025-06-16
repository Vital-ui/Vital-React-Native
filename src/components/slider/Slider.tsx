import React from "react";
import ProgressBar from "../progressBar/ProgressBar";
import {Animated, LayoutChangeEvent, PanResponder, View} from "react-native";
import {SliderProps} from "./types";
import ThemeContext from "../context/context";

const Slider = (props: SliderProps) => {
    const context = React.useContext(ThemeContext);
    const [progress, setProgress] = React.useState(0);
    const [trackWidth, setHeight] = React.useState(0);
    const height = props.thickness ? props.thickness : 6;
    const containerStyle = props.vertical ? {height: "100%"} : {width: "100%"};
    const pan = React.useRef(new Animated.ValueXY()).current;

    const panResponder = React.useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderStart: () => pan.extractOffset(),
            onPanResponderMove: (_event, gestureState) => {
                pan.x.setValue(gestureState.dx - 16);
                pan.y.setValue(gestureState.dy - 16);
            },
            onPanResponderRelease: () => {
                pan.extractOffset();
            },
        }),
    ).current;
    const onLayout = (event: LayoutChangeEvent) => {
        if (props.vertical)
            setHeight(event.nativeEvent.layout.height);
        else
            setHeight(event.nativeEvent.layout.width);
    };


    const interpolateUpper = (trackWidth - (height * 2) - (height + 8) / 2) > 0 ? trackWidth - (height * 2) - (height + 8) / 2 : 0;
    const interpolateLower = -(height + 8) / 2;
    const panListner = React.useCallback((value) => {
        if (trackWidth !== 0)
            if (props.vertical) {
                let y = value.y;
                if (value.y < 0) {
                    y = 0;
                }
                if (value.y > interpolateUpper) {
                    y = interpolateUpper;
                }
                const percent = y / (interpolateUpper - interpolateLower);
                setProgress(percent);
            } else {
                let x = value.x;
                if (value.x < 0) {
                    x = 0;
                }
                if (value.x > interpolateUpper) {
                    x = interpolateUpper;
                }
                const percent = (x) / (interpolateUpper - interpolateLower);
                setProgress(percent);
            }

    }, [props.thickness, trackWidth]);

    React.useEffect(() => {
        pan.addListener(panListner);
        return () => {
            pan.removeAllListeners();
        };
    }, [panListner]);

    React.useEffect(() => {
        if (progress != props.progress && trackWidth)
            props.onChange(progress);
    }, [progress]);
    React.useEffect(() => {
        if (props.initialProgress && progress != props.initialProgress && trackWidth) {
            setProgress(props.initialProgress);
            if (props.vertical) {
                pan.y.setOffset(props.initialProgress * (interpolateUpper - interpolateLower));
                pan.y.setValue(0);
            } else {
                pan.x.setOffset(props.initialProgress * (interpolateUpper - interpolateLower));
                pan.x.setValue(0);
            }
            pan.flattenOffset();
            pan.extractOffset();
        }
    }, [props.initialProgress, trackWidth]);

    return (
        <View style={[containerStyle, {
            borderRadius: height,
            padding: height
        }]} onLayout={onLayout}>
            <ProgressBar
                colors={props.colors} progress={progress} backgroundColor={props.backgroundColor}
                vertical={props.vertical} animationSpeed={0} thickness={height}
            />
            <Animated.View style={{
                transform: props.vertical ? [{
                    translateY: pan.y.interpolate({
                        inputRange: [0, interpolateUpper],
                        outputRange: [interpolateLower, interpolateUpper + interpolateLower],
                        extrapolate: "clamp"
                    })
                }, {translateX: -height - 4}] : [{
                    translateX: pan.x.interpolate({
                        inputRange: [0, interpolateUpper],
                        outputRange: [interpolateLower, interpolateUpper + interpolateLower],
                        extrapolate: "clamp"
                    })
                }, {translateY: -height - 4}],
            }}>
                <View style={{
                    height: height + 8,
                    width: height + 8,
                    borderRadius: (height + 8) / 2,
                    backgroundColor: context.theme.Theme,
                    elevation: 7
                }} {...(props.disabled ? {} : panResponder.panHandlers)}>
                    {props.thumbBackground}
                </View>
            </Animated.View>
        </View>
    );
};

export default Slider;
