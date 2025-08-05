import type {ColorValue, StyleProp, ViewStyle} from "react-native";
import React from "react";

export type TabOption =
    | number
    | string
    | {
          label:
              | string
              | React.ReactNode
              | ((_activeValue: string | number) => React.ReactNode);
          value: string | number;
      };

export type SegmentedTabProps = {
    containerStyle?: StyleProp<ViewStyle>;
    value?: string | number;
    defaultValue?: string | number;
    onChange?: (_args0: string | number) => null | void;
    options: TabOption[];
    activeTextColor?: ColorValue;
    borderRadius?: number;
    colors?: string | [string, string];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
};
