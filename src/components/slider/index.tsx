import React from "react";
import {
    Animated,
    type DimensionValue,
    type LayoutChangeEvent,
    PanResponder,
    View,
} from "react-native";
import ThemeContext from "../context/context";
import ProgressBar from "../progressBar";
import { sliderStyles } from "./style";
import type { SliderProps } from "./types";

const Slider = (props: SliderProps) => {
    const { theme } = React.useContext(ThemeContext);
    const [progress, setProgress] = React.useState(props.initialProgress ?? 0);
    const [trackWidth, setHeight] = React.useState(0);
    const height = props.thickness ?? 6;
    const isVertical = props.vertical ?? false;

    const containerDimension = isVertical
        ? { height: "100%" as DimensionValue }
        : { width: "100%" as DimensionValue };
    const pan = React.useRef(new Animated.ValueXY()).current;
    const thumbSize = height + 8;
    const thumbRadius = (height + 8) / 2;
    const interpolateUpper =
        trackWidth - height * 2 - (height + 8) / 2 > 0
            ? trackWidth - height * 2 - (height + 8) / 2
            : 0;
    const interpolateLower = -(height + 8) / 2;

    const onLayout = React.useCallback(
        (event: LayoutChangeEvent) => {
            const len = isVertical
                ? event.nativeEvent.layout.height
                : event.nativeEvent.layout.width;
            setHeight(len);
        },
        [isVertical],
    );

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

    const panListner = React.useCallback(
        (value: { x: number; y: number }) => {
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
                    const percent = x / (interpolateUpper - interpolateLower);
                    setProgress(percent);
                }
        },
        [props.thickness, trackWidth],
    );

    React.useEffect(() => {
        pan.addListener(panListner);
        return () => {
            pan.removeAllListeners();
        };
    }, [panListner]);

    React.useEffect(() => {
        if (progress != props.progress && trackWidth) props.onChange(progress);
    }, [progress]);
    React.useEffect(() => {
        if (
            props.initialProgress &&
            progress != props.initialProgress &&
            trackWidth
        ) {
            setProgress(props.initialProgress);
            if (props.vertical) {
                pan.y.setOffset(
                    props.initialProgress *
                    (interpolateUpper - interpolateLower),
                );
                pan.y.setValue(0);
            } else {
                pan.x.setOffset(
                    props.initialProgress *
                    (interpolateUpper - interpolateLower),
                );
                pan.x.setValue(0);
            }
            pan.flattenOffset();
            pan.extractOffset();
        }
    }, [props.initialProgress, trackWidth]);
    const thumbTransform = isVertical
        ? [
            {
                translateY: pan.y.interpolate({
                    inputRange: [0, interpolateUpper],
                    outputRange: [
                        interpolateLower,
                        interpolateUpper + interpolateLower,
                    ],
                    extrapolate: "clamp",
                }),
            },
            { translateX: -thumbRadius },
        ]
        : [
            {
                translateX: pan.x.interpolate({
                    inputRange: [0, interpolateUpper],
                    outputRange: [
                        interpolateLower,
                        interpolateUpper + interpolateLower,
                    ],
                    extrapolate: "clamp",
                }),
            },
            { translateY: -thumbRadius },
        ];
    return (
        <View
            style={[
                sliderStyles.container,
                containerDimension,
                {
                    borderRadius: height,
                    padding: height,
                },
            ]}
            onLayout={onLayout}
        >
            <ProgressBar
                colors={props.colors}
                progress={progress}
                backgroundColor={props.backgroundColor}
                vertical={props.vertical}
                animationSpeed={0}
                thickness={height}
            />
            <Animated.View
                style={{
                    transform: thumbTransform,
                }}
            >
                <View
                    style={[
                        sliderStyles.thumb,
                        {
                            height: thumbSize,
                            width: thumbSize,
                            borderRadius: thumbRadius,
                            backgroundColor: theme.Theme,
                            elevation: 7,
                        },
                    ]}
                    {...(props.disabled ? {} : panResponder.panHandlers)}
                >
                    {props.thumbBackground}
                </View>
            </Animated.View>
        </View>
    );
};

export default Slider;
