import type {GestureResponderEvent, Falsy, RecursiveArray, RegisteredStyle, ViewStyle} from "react-native";
import type {ReactNode} from "react";
import type {ButtonType} from "../button/types";

export type BadgeButtonType = ButtonType & {
    onPress?: (_: GestureResponderEvent) => void;
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    children?: ReactNode;
    badgeData?: ReactNode
    size?: number;
    action?: string;
}
