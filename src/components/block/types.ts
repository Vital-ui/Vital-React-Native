import type React from "react";
import type {Falsy, RecursiveArray, RegisteredStyle, TextStyle, ViewStyle} from "react-native";

export type TitleType = {
    titleLeft?: React.ReactChild | React.ReactFragment;
    blockTitleSize?: TextStyle | RegisteredStyle<TextStyle> | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>> | readonly (TextStyle | Falsy | RegisteredStyle<TextStyle>)[];
    blockTitleStyle?: TextStyle | RegisteredStyle<TextStyle> | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>> | readonly (TextStyle | Falsy | RegisteredStyle<TextStyle>)[];
    title?: React.ReactChild | React.ReactFragment;
}

export type BlockType = TitleType & {
    titleMargin?: {
        margin?: string | number;
        marginHorizontal?: string | number;
        marginVertical?: string | number;
        marginTop?: string | number;
        marginBottom?: string | number;
        marginRight?: string | number;
        marginLeft?: string | number;
    };
    blockMargin?: {
        margin?: string | number;
        marginHorizontal?: string | number;
        marginVertical?: string | number;
        marginTop?: string | number;
        marginBottom?: string | number;
        marginRight?: string | number;
        marginLeft?: string | number;
    };
    titleFluid?: boolean;
    header?: boolean;
    contentContainerStyle?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    children?: React.ReactChild | React.ReactFragment;
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    fluid?: boolean;
    blockHeaderRight?: React.ReactChild | React.ReactFragment;
}
