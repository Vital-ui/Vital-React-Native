import type {Falsy, RecursiveArray, RegisteredStyle, ViewStyle} from "react-native";
import type React from "react";

export type AccordianProps = {
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>>;
    titleStyle?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    title: React.ReactChild | React.ReactFragment;
    showIcon?: boolean;
    bodyStyle?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    children: React.ReactChild | React.ReactFragment;
    open?: boolean;
    setOpen?: () => null | void
}
