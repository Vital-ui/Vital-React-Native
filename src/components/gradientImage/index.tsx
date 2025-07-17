import {Image, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import type {GradientImageProps} from "./types";
import {gradientImageStyles} from "./styles";

export default function GradientImage(props: GradientImageProps) {
    return (
        <View>
            <Image
                source={props.image}
                style={[gradientImageStyles.image, props.style]}
                resizeMode={props.resizeMode || "cover"}
            />
            <LinearGradient
                colors={props.colors}
                start={props.start}
                end={props.end}
                style={[gradientImageStyles.gradient, props.style]}
            >
                {props.children}
            </LinearGradient>
        </View>
    );
}
