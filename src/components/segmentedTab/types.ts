import {ColorValue, StyleProp, ViewStyle} from "react-native";
import React from "react";


export type TabOption = number | string | {
    label: string | React.ReactChild | React.ReactFragment | ((_activeValue: string | number) => React.ReactChild | React.ReactFragment),
    value: string | number
}

export type SegmentedTabProps = {
    containerStyle?: StyleProp<ViewStyle>
    value?: string | number
    defaultValue?: string | number
    onChange?: (_args0: string | number) => null | void
    options: TabOption[]
    activeTextColor?: ColorValue
    borderRadius?: number
    colors?: string | [string, string]
    start?: { x: number, y: number }
    end?: { x: number, y: number }
}
