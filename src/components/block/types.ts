import type {ReactNode} from "react";
import type {Falsy, RecursiveArray, RegisteredStyle, TextStyle, ViewStyle} from "react-native";

export type TitleType = {
    titleLeft?: ReactNode;
    blockTitleSize?: TextStyle | RegisteredStyle<TextStyle> | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>> | readonly (TextStyle | Falsy | RegisteredStyle<TextStyle>)[];
    blockTitleStyle?: TextStyle | RegisteredStyle<TextStyle> | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>> | readonly (TextStyle | Falsy | RegisteredStyle<TextStyle>)[];
    title?: ReactNode
    fontConfig?: TextStyle | RegisteredStyle<TextStyle>;
}

export type BlockType = TitleType & {
    titleMargin?: {
        margin?: number;
        marginHorizontal?: number;
        marginVertical?: number;
        marginTop?: number;
        marginBottom?: number;
        marginRight?: number;
        marginLeft?: number;
    };
    blockMargin?: {
        margin?: number;
        marginHorizontal?: number;
        marginVertical?: number;
        marginTop?: number;
        marginBottom?: number;
        marginRight?: number;
        marginLeft?: number;
    };
    titleFluid?: boolean;
    header?: boolean;
    contentContainerStyle?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    children?: ReactNode
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    fluid?: boolean;
    blockHeaderRight?: ReactNode
}
