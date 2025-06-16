import type {
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
} from "react-native";
import type React from "react";

export type GradientImageProps ={
    image: ImageSourcePropType;
    style?:  StyleProp<ImageStyle>;
    colors: (string | number)[];
    start: { x: number; y: number; };
    end: { x: number; y: number; };
    children?: React.ReactChild | React.ReactFragment
}
