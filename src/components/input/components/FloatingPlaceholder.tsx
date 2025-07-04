import React from "react";
import Animated, { Easing, SharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import type { ViewStyle, TextStyle, ColorValue, LayoutChangeEvent } from "react-native";
import ThemeContext from "@/components/context/context";

interface FloatingPlaceholderProps {
    placeholder?: string;
    placeholderTextColor?: ColorValue | undefined;
    floatingPlaceholderProps?: {
        textStyle?: TextStyle;
        containerStyle?: ViewStyle;
        fontSize?: number;
        activeFontSize?: number;
    };
    inFocus: SharedValue<boolean>;
    actualValue: string | undefined;
    wrapperHeight: number;
}

export default function FloatingPlaceholder({
    placeholder,
    placeholderTextColor,
    floatingPlaceholderProps,
    inFocus,
    actualValue,
    wrapperHeight,
}: FloatingPlaceholderProps) {
    const context = React.useContext(ThemeContext);
    const [height, setHeight] = React.useState(20);
    const onLayout = (event: LayoutChangeEvent) => {
        setHeight(event.nativeEvent.layout.height);
    };

    const placeholderStyle = useAnimatedStyle(() => {
        return {

            position: "absolute",
            left: withTiming(inFocus.value || actualValue ? "1%" : "2%", {
                duration: 100,
                easing: Easing.out(Easing.quad),
            }),
            top: "50%",
            transform: [{
                translateY: withTiming(inFocus.value || actualValue ? (-1 * wrapperHeight / 2) + 3 : -1 * height / 2, {
                    duration: 100,
                    easing: Easing.out(Easing.quad),
                })
            }]
        };
    }, [inFocus, height, wrapperHeight, actualValue]);

    const placeholderFontStyle = useAnimatedStyle(() => {
        const animatedFontSize = inFocus.value || actualValue ? floatingPlaceholderProps?.activeFontSize ? floatingPlaceholderProps?.activeFontSize : 12 : floatingPlaceholderProps?.fontSize ? floatingPlaceholderProps?.fontSize : 16;
        return {
            fontSize: animatedFontSize,
        };
    });

    return (
        <Animated.View style={[placeholderStyle]} onLayout={onLayout}>
            <Animated.Text
                allowFontScaling={false}
                style={[
                    {
                        ...context.fontConfig,
                        color: placeholderTextColor ? placeholderTextColor : context.theme.TextColor,
                    },
                    floatingPlaceholderProps?.textStyle,
                    placeholderFontStyle
                ]}
            >
                {placeholder}
            </Animated.Text>
        </Animated.View>
    );
}   