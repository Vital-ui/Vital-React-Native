import type {StyleProp, ViewStyle} from "react-native";

export type SwitchProps = {
    styles: {
        activeTrackColors: string | [string, string];
        start?: { x: number, y: number };
        end?: { x: number, y: number };
        thumbStyle?: StyleProp<ViewStyle>;
    },
    defaultValue?: boolean;
    value?: boolean;
    onChange?: (_: boolean) => void | null,
    isDark?: boolean,
    disabled?: boolean
}
