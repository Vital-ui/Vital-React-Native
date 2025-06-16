import type {TextProps} from "react-native";

export type GradientTextProps = TextProps & {
    colors: [string, string];
    start?: { x: number, y: number };
    end?: { x: number, y: number };
}
