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
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>>;
    onBackDropPress?: ((_: GestureResponderEvent) => void);
    header?: boolean;
    headerColor?: ColorValue;
    title?: React.ReactChild | React.ReactFragment;
    onRequestClose?: ((_: GestureResponderEvent) => void);
    bodyColor?: ColorValue;
    children?: React.ReactChild | React.ReactFragment;
    onRequestOpen?: ((_: GestureResponderEvent) => void);
    actionFrom?: React.ReactChild | React.ReactFragment;
}
