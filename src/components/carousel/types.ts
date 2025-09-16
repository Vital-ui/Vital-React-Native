import type { Animated, ListRenderItem, StyleProp, ViewStyle } from "react-native";

export type PaginatorProps = {
    fluid?: boolean;
    data: any[];
    scrollX: Animated.AnimatedValue;
    DotColor?: string;
    showPaginator?: boolean;
    overlapPaginator?: boolean;
    paginatorGap?: number;
}

export type CarousalProps = Omit<PaginatorProps, 'scrollX'> & {
    style?: StyleProp<ViewStyle>;
    renderItem?: ListRenderItem<any>
    loop?: boolean;
}
