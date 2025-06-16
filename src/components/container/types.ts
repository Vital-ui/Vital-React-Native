import type {
    ColorValue,
    Falsy,
    GestureResponderEvent, ImageSourcePropType, ImageStyle,
    PressableStateCallbackType,
    RecursiveArray,
    RegisteredStyle, ScrollViewProps, StyleProp, TextStyle,
    ViewStyle
} from "react-native";
import type React from "react";

export type HeaderProps = {
    headerColor?: ColorValue;
    addIcon?: React.ReactChild | React.ReactFragment;
    addIconAction?: ((_: GestureResponderEvent) => void);
    top?: number,
    headerLeftIconStyle?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>> | readonly (ViewStyle | Falsy | RegisteredStyle<ViewStyle>)[];
    headerLeftIconBackground?: ColorValue;
    drawerAction?: boolean;
    navigation?: { openDrawer: ((_: GestureResponderEvent) => void) | null | undefined; goBack: () => void; };
    drawerActionIcon?: React.ReactChild | React.ReactFragment | React.ReactPortal | ((_: PressableStateCallbackType) => React.ReactNode);
    headerLeftIconColor?: string;
    back?: boolean;
    backIcon?: React.ReactChild | React.ReactFragment;
    headerTextStyle?: TextStyle | RegisteredStyle<TextStyle> | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>>;
    headerTextPosition?: "center" | "right" | "left"
    headerText?: React.ReactChild | React.ReactFragment;
    headerRight?: React.ReactChild | React.ReactFragment;
}

export type CoreContainerProps = {
    fluid?: boolean;
    header?: boolean;
    bottom: number;
    style?: ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<ViewStyle | RegisteredStyle<ViewStyle> | Falsy>;
    children?: React.ReactChild | React.ReactFragment;
    scrollViewProps?: ScrollViewProps
}

export type SafeAreaContainerProps = CoreContainerProps & HeaderProps & {
    backgroundColor?: ColorValue;
    bgImg?: ImageSourcePropType;
    bgImgStyle?: StyleProp<ImageStyle>;
    keyboardAvoiding?: boolean;
    scrollViewProps?: ScrollViewProps
}

