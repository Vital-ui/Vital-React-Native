import {StyleProp, TextStyle, ViewStyle} from "react-native";
import React from "react";

export type CalenderProps = {

    renderHeader?: (_month: string | undefined, _year: number) => React.ReactChild | React.ReactFragment;
    activeDateBackground?: React.ReactChild | React.ReactFragment
    onSelect: (_: Date) => void | null;
    date?: Date;
    minimumDate?: Date;
    styles?: {
        dayStyle?: StyleProp<TextStyle>;
        headerStyle?: StyleProp<TextStyle>;
        lineSeparatorStyle?: StyleProp<ViewStyle>;
        dateStyle?: StyleProp<TextStyle>;
        activeDateStyle?: StyleProp<TextStyle>;
        containerStyle?: StyleProp<ViewStyle>;
    }
}
