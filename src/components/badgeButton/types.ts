import type {GestureResponderEvent, Falsy, RecursiveArray, RegisteredStyle, ViewStyle} from "react-native";
import type React from "react";
import type {ButtonType} from "../button/types";

export type BadgeButtonType = ButtonType & {
    onPress?: (_: GestureResponderEvent) => void;
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    children?: React.ReactChild | React.ReactFragment;
    badgeData?: React.ReactChild | React.ReactFragment;
    size?: number;
}
