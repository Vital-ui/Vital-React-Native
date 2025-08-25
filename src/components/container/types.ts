import type {
    ColorValue,
    Falsy,
    ImageSourcePropType, ImageStyle,
    RecursiveArray,
    RegisteredStyle, ScrollViewProps, StyleProp,
    ViewStyle
} from "react-native";
import type React from "react";
import {HeaderProps} from "../header/types";


export type CoreContainerProps = {
    fluid?: boolean;
    header?: boolean;
    bottom: number;
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | RegisteredStyle<ViewStyle> | Falsy>;
    children?: React.ReactNode;
    scrollViewProps?: ScrollViewProps
}

export type SafeAreaContainerProps = CoreContainerProps & HeaderProps & {
    backgroundColor?: ColorValue;
    bgImg?: ImageSourcePropType;
    bgImgStyle?: StyleProp<ImageStyle>;
    keyboardAvoiding?: boolean;
    scrollViewProps?: ScrollViewProps
}

