import React from "react";
import Animated, { Easing, withTiming } from "react-native-reanimated";
import type { ViewStyle, TextStyle } from "react-native";

interface FloatingPlaceholderProps {
    placeholder?: string;
    placeholderTextColor?: string;
    floatingPlaceholderProps?: {
        textStyle?: TextStyle;
        containerStyle?: ViewStyle;
        fontSize?: number;
        activeFontSize?: number;
    };
    context: any;
    inFocus: any;
    actualValue: any;
    height: number;
    height2: number;
    onLayout: (event: any) => void;
    useAnimatedStyle: any;
}

export default function FloatingPlaceholder({
    placeholder,
    placeholderTextColor,
    floatingPlaceholderProps,
    context,
    inFocus,
    actualValue,
    height,
    height2,
    onLayout,
    useAnimatedStyle
}: FloatingPlaceholderProps) {
    const placeholderStyle = useAnimatedStyle(() => {
        return {

            position: "absolute",
            left: withTiming(inFocus.value || actualValue ? "1%" : "2%", {
                duration: 100,
                easing: Easing.out(Easing.quad),
            }),
            top: "50%",
            transform: [{
                translateY: withTiming(inFocus.value || actualValue ? (-1 * height2 / 2) + 3 : -1 * height / 2, {
                    duration: 100,
                    easing: Easing.out(Easing.quad),
                })
            }]
        };
    }, [inFocus, height, height2, actualValue]);

    const placeholderFontStyle = useAnimatedStyle(() => {
        const animatedFontSize = inFocus.value || actualValue ? floatingPlaceholderProps?.activeFontSize ? floatingPlaceholderProps?.activeFontSize : 12 : floatingPlaceholderProps?.fontSize ? floatingPlaceholderProps?.fontSize : 16;
        return {
            fontSize: animatedFontSize,
        };
    });

    return (
        <Animated.View style={[placeholderStyle]} onLayout={onLayout}>
            <Animated.Text style={[{
                ...context.fontConfig,
                color: placeholderTextColor ? placeholderTextColor : context.theme.TextColor
            }, floatingPlaceholderProps?.textStyle, placeholderFontStyle]}>{placeholder}</Animated.Text>
        </Animated.View>
    );
} 