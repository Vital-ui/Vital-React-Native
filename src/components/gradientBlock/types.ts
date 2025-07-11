import type {ColorValue, StyleProp, ViewStyle} from "react-native";
import type {ReactNode} from "react";

export type GradientBlockProps = {
    colors: (string | number)[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
    bgfill?: boolean;
    borderRadius?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    borderWidth?: number;
    padding?: StyleProp<ViewStyle>;
    backgroundColor?: ColorValue;
    children?: ReactNode;
};
