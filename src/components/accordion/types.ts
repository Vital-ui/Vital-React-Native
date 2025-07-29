import type {Falsy, RecursiveArray, RegisteredStyle, ViewStyle} from "react-native";
import type React from "react";

export type AccordionProps = {
    styles?: {
        style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>>;
        titleStyle?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
        bodyStyle?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    };
    title: React.ReactNode;
    showIcon?: boolean;
    children: React.ReactNode;
    open?: boolean;
    setOpen?: () =>null | void
}
