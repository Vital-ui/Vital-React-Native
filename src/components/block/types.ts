import type {ReactNode} from "react";
import type { Falsy, RecursiveArray, RegisteredStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TitleType = {
    titleLeft?: ReactNode;
    titleRight?: ReactNode;
    titleStyle?: TextStyle | RegisteredStyle<TextStyle> | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>> | readonly (TextStyle | Falsy | RegisteredStyle<TextStyle>)[];
    title?: ReactNode
    fontConfig?: TextStyle | RegisteredStyle<TextStyle>;
}

export type BlockType = TitleType & {
    titleFluid?: boolean;
    contentContainerStyle?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    children?: ReactNode
    style?: ViewStyle | StyleProp<ViewStyle> | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    fluid?: boolean;
}
