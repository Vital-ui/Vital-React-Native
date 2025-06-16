import type {ViewStyle, Animated, StyleProp, ListRenderItem} from "react-native";

export type PaginatorProps = {
    fluid?: boolean;
    data: any[];
    scrollX: Animated.AnimatedValue;
    DotColor?: string;
}


export type CarousalProps = PaginatorProps & {
    style?: StyleProp<ViewStyle>;
    renderItem?: ListRenderItem<any>
}
