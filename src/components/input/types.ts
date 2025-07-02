import type React from "react";
import type { StyleProp, TextInput, TextInputProps, TextStyle, ViewStyle } from "react-native";

export type InputProps = TextInputProps & {
    ref?: React.Ref<TextInput>;
    inputStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    borderColor?: string | [string, string];
    bgColor?: string;
    borderRadius?: { borderRadius: number };
    onFocusBorderColor?: string | [string, string];
    onFocusBGColor?: string;
    secureTextEntry?: boolean;
    inputLeft?: React.ReactChild | React.ReactFragment;
    inputRight?: React.ReactChild | React.ReactFragment;
    feedback?: React.ReactChild | React.ReactFragment;
    floatingPlaceholder?: boolean
    floatingPlaceholderProps?: {
        containerStyle?: StyleProp<ViewStyle>,
        fontSize?: number,
        activeFontSize?: number,
        textStyle?: StyleProp<TextStyle>
    }
}
