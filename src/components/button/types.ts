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
    onPress?: ((_: GestureResponderEvent) => void);
    loading?: boolean;
    disabled?: boolean;
    padding?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[];
    backgroundColor?: ColorValue;
    touchableOpacityProps?: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<TouchableOpacity> & Readonly<TouchableOpacityProps> & Readonly<{ children?: React.ReactNode; }>;
    left?: React.ReactChild | React.ReactFragment;
    right?: React.ReactChild | React.ReactFragment ;
    children?: React.ReactChild | React.ReactFragment;
}
