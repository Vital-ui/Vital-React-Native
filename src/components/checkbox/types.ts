import type {
    ColorValue,
    Falsy,
    GestureResponderEvent,
    RecursiveArray,
    RegisteredStyle,
    ViewStyle
} from "react-native";
import type React from "react";

export type CheckboxProps = {
    onPress?: ((_: GestureResponderEvent) => void);
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[];
    boxStyle?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[];
    children?: React.ReactChild | React.ReactFragment;
    fill?: boolean;
    backgroundColor?: string;
    borderSize?: number;
    size: number;
    borderColor?: ColorValue;
    checked?: boolean;
    checkColor?: string;
}
