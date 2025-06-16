import type {ColorValue, Falsy, RecursiveArray, RegisteredStyle, TextStyle, ViewStyle} from "react-native";

export type OTPProps = {
    length: number;
    blockStyle?: TextStyle | RegisteredStyle<TextStyle> | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>> | readonly (TextStyle | Falsy | RegisteredStyle<TextStyle>)[];
    backgroundColor?: ColorValue;
    editable?: boolean;
    value?: string;
    onChange?: (_: string) => void;
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
}
