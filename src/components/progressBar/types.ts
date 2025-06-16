import type {ColorValue} from "react-native";

export type ProgressBarProps = {
    colors: [string, string];
    vertical?: boolean;
    progress: number;
    thickness?: number;
    backgroundColor?: ColorValue;
    animationSpeed?: number;
}
