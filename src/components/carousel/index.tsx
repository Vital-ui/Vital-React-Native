import React from "react";
import {Animated, View} from "react-native";
import type {CarousalProps} from "./types";
import Paginator from "./paginator";

export default function Carousel(props: CarousalProps) {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [_, setCurrentIndex] = React.useState(0);
    const viewableItemsChanged = React.useRef(({viewableItems}: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = React.useRef({
        viewAreaCoveragePercentThreshold: 50,
    }).current;
    const slidesRef = React.useRef(null);
    return (
        <View style={props.style}>
            <Animated.FlatList
                data={props.data}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false},
                )}
                keyExtractor={(item, index: number) =>
                    item?.value !== undefined
                        ? item.value.toString()
                        : index.toString()
                }
                renderItem={props.renderItem}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
            <Paginator {...props} data={props.data} scrollX={scrollX} />
        </View>
    );
}
