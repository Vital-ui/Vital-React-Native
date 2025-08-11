import type {
    Falsy,
    GestureResponderEvent, Pressable,
    RecursiveArray,
    RegisteredStyle,
    ViewStyle,
} from "react-native";
import React from "react";

export type ButtonType = {
    color?: string | [string, string];
    start?: {
        x:number,
        y:number
    };
    end?: {
        x:number,
        y:number
    };
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[];
    bordered?: boolean;
    onPress?: ((_: GestureResponderEvent) => void);
    loading?: boolean;
    disabled?: boolean;
    // touchableOpacityProps?: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<typeof TouchableOpacity> & Readonly<TouchableOpacityProps> & Readonly<{ children?: React.ReactNode; }>;
    pressableProps?: React.ComponentProps<typeof Pressable>;
    left?: React.ReactNode;
    right?: React.ReactNode;
    children?: React.ReactNode;
}
