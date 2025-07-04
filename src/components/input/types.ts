import type React from "react";
import type { StyleProp, TextInput, TextInputProps, TextStyle, ViewStyle } from "react-native";

export type InputProps = TextInputProps & {
    ref?: React.Ref<TextInput>;
    styles?: {
        wrapper?: StyleProp<ViewStyle>;
        input?: StyleProp<ViewStyle>;
        text?: StyleProp<TextStyle>;
        border?: {
            color?: string | [string, string];
            onFocusColor?: string | [string, string];
            radius?: { borderRadius: number };
        };
        background?: {
            color?: string;
            onFocusColor?: string;
        };
    };
    addons?: {
        left?: React.ReactNode;
        right?: React.ReactNode;
    };
    placeholder?: {
        text?: string;
        color?: string;
        floating?: boolean;
        floatingProps?: {
            containerStyle?: StyleProp<ViewStyle>,
            fontSize?: number,
            activeFontSize?: number,
            textStyle?: StyleProp<TextStyle>
        }
    };
    secureTextEntry?: boolean;
    feedback?: {
        node?: React.ReactNode;
    };
}
