import type {Falsy, RecursiveArray, RegisteredStyle, TextStyle} from "react-native";

type OTPInputStyle = TextStyle | RegisteredStyle<TextStyle> | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>> | readonly (TextStyle | Falsy | RegisteredStyle<TextStyle>)[];

export type OTPInputProps = {
    length: number;
    blockStyle?: OTPInputStyle;
    editable?: boolean;
    value?: string;
    onChange?: (_: string) => void;
    style?: OTPInputStyle;
}
