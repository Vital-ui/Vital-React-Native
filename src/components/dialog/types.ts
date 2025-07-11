import type {
    ColorValue,
    Falsy,
    GestureResponderEvent,
    RecursiveArray,
    RegisteredStyle,
    ViewStyle
} from "react-native";
import type React from "react";

export type DialogProps = {
    visible?: boolean;
    onClose: () => void;
    styles ?: {
        style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>>;
        headerColor?: ColorValue;
        bodyColor?: ColorValue;
    };
    onBackDropPress?: ((_: GestureResponderEvent) => void);
    header?: boolean;
    title?: React.ReactNode;
    onRequestClose?: ((_: GestureResponderEvent) => void);
    children?: React.ReactNode;
    onRequestOpen?: ((_: GestureResponderEvent) => void);
    actionFrom?: React.ReactNode;
}
