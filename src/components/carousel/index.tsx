import React from "react";
import { Animated, Dimensions, View } from "react-native";
import Paginator from "./paginator";
import type { CarousalProps } from "./types";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

export default function Carousel(props: CarousalProps) {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [_, setCurrentIndex] = React.useState(0);
    const viewableItemsChanged = React.useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = React.useRef({
        viewAreaCoveragePercentThreshold: 50,
    }).current;
    const slidesRef = React.useRef<any>(null);

    // Default values for new props
    const showPaginator = props?.showPaginator ?? false; // Default to false
    const overlapPaginator = props?.overlapPaginator ?? true; // Default to true
    const paginatorGap = props?.paginatorGap ?? 50; // Default to 50
    const loop = props?.loop ?? false; // Default to false

    // Prepare data for looping
    const carouselData = React.useMemo(() => {
        if (loop && props.data.length > 1) {
            // Add first item at the end and last item at the beginning for seamless loop
            return [...props.data, ...props.data, ...props.data];
        }
        return props.data;
    }, [props.data, loop]);

    // Calculate dynamic height for non-overlapping paginator
    const containerStyle = React.useMemo(() => {
        const baseStyle = props?.style;

        if (showPaginator && !overlapPaginator) {
            // For non-overlapping paginator, we need to add extra height
            // to accommodate the paginator and gap
            const extraHeight = paginatorGap + 40; // 40px for paginator height

            if (typeof baseStyle === 'object' && baseStyle && 'height' in baseStyle) {
                return {
                    ...baseStyle,
                    height: (baseStyle.height as number) + extraHeight,
                };
            }
        }

        return baseStyle;
    }, [props?.style, showPaginator, overlapPaginator, paginatorGap]);

    // Handle scroll events for looping
    const handleScroll = React.useCallback((event: any) => {
        if (!loop || props.data.length <= 1) return;

        const contentOffset = event.nativeEvent.contentOffset.x;
        const itemWidth = SCREEN_WIDTH - 32; // Assuming full width minus padding

        // If we're at the end (last original item), jump to the middle set
        if (contentOffset >= itemWidth * (props.data.length + props.data.length)) {
            slidesRef.current?.scrollToOffset({
                offset: itemWidth * props.data.length,
                animated: false,
            });
        }
        // If we're at the beginning (first original item), jump to the middle set
        else if (contentOffset <= itemWidth * (props.data.length - 1)) {
            slidesRef.current?.scrollToOffset({
                offset: itemWidth * props.data.length,
                animated: false,
            });
        }
    }, [loop, props.data.length]);

    // Get initial scroll position for loop
    const getInitialScrollIndex = React.useCallback(() => {
        if (loop && props.data.length > 1) {
            return props.data.length; // Start from the middle set
        }
        return 0;
    }, [loop, props.data.length]);

    return (
        <View style={[containerStyle, { position: 'relative' }]}>
            <Animated.FlatList
                data={carouselData}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false },
                )}
                onMomentumScrollEnd={handleScroll}
                keyExtractor={(item, index: number) =>
                    item?.value !== undefined
                        ? `${item.value}-${index}`
                        : index.toString()
                }
                renderItem={props.renderItem}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
                getItemLayout={(data, index) => ({
                    length: SCREEN_WIDTH - 32,
                    offset: (SCREEN_WIDTH - 32) * index,
                    index,
                })}
                initialScrollIndex={getInitialScrollIndex()}
                contentContainerStyle={{
                    paddingBottom: showPaginator && !overlapPaginator ? paginatorGap : 0
                }}
            />
            {showPaginator && (
                <Paginator
                    {...props}
                    data={props.data} // Use original data for paginator
                    scrollX={scrollX}
                    overlapPaginator={overlapPaginator}
                    paginatorGap={paginatorGap}
                />
            )}
        </View>
    );
}
