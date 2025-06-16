import type {ColorValue, Falsy, RecursiveArray, RegisteredStyle, ViewStyle} from "react-native";
import type React from "react";

export type GradientBlockProps = {
    colors: (string | number)[];
    start?: { x: number; y: number; };
    end?: { x: number; y: number; };
    bgfill?: boolean;
    borderRadius?:  ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[];
    style: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[];
    borderWidth?: number;
    padding: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[];
    backgroundColor: ColorValue | undefined;
    children?: React.ReactChild | React.ReactFragment;
}
