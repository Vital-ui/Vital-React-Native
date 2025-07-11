import type {
    ColorValue,
    Falsy,
    GestureResponderEvent,
    RecursiveArray,
    RegisteredStyle,
    TouchableOpacity, TouchableOpacityProps,
    ViewStyle
} from "react-native";
import type React from "react";

export type ButtonType = {
    styles ?: {
        gradient?: boolean;
        color?: string | [string, string];
        start?: {
            x:number,
            y:number
        };
        end?: {
            x:number,
            y:number
        };
        borderRadius?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[];
        margin?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[];
        bordered?: boolean;
        backgroundColor?: ColorValue;
        padding?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[];
    };

    state ?: {
        loading?: boolean;
        disabled?: boolean;
    };

    addons ?: {
        left?: React.ReactNode;
        right?: React.ReactNode ;
    };

    onPress?: ((_: GestureResponderEvent) => void);
    touchableOpacityProps?: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<TouchableOpacity> & Readonly<TouchableOpacityProps> & Readonly<{ children?: React.ReactNode; }>;
    children?: React.ReactNode;
}
