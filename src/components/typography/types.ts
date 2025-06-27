import type {TextProps} from "react-native";

export type GradientTextProps = TextProps & {
    colors: [string, string];
    start?: { x: number, y: number };
    end?: { x: number, y: number };
}

// Typography configuration interface
export interface TypographyConfig {
    rootFontSize: number;
  }