import React from "react";
import {Dimensions, View, Animated} from "react-native";
import ThemeContext from "../context/context";
import type {CarousalProps, PaginatorProps} from "./types";

function Paginator(props: PaginatorProps) {
    const width = props.fluid ? Dimensions.get("screen").width : Dimensions.get("screen").width * 22 / 24;
    return (
        <ThemeContext.Consumer>
            {
                (context) => <View style={{flexDirection: "row", justifyContent: "center"}}>
                    {props.data.map((_, i) => {
                        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                        const dotWidth = props.scrollX.interpolate({
                            inputRange,
                            outputRange: [width * 0.02, width * 0.05, width * 0.02],
                            extrapolate: "clamp",
                        });
                        const opacity = props.scrollX.interpolate({
                            inputRange,
                            outputRange: [0.2, 1, 0.2],
                            extrapolate: "clamp",
                        });
                        return (
                            <Animated.View
                                key={i.toString()}
                                style={{
                                    marginHorizontal: Dimensions.get("screen").height * 0.01,
                                    borderRadius: width,
                                    height: width * 0.015,
                                    width: dotWidth,
                                    opacity,
                                    backgroundColor: props.DotColor ? props.DotColor : context.theme.ThemeMutedDark,
                                }}
                            />
                        );
                    })}
                </View>
            }
        </ThemeContext.Consumer>
    );
}

export default function Carousel(props: CarousalProps) {
    const scrollx = React.useRef(new Animated.Value(0)).current;
    // eslint-disable-next-line no-unused-vars
    const [_, setCurrentIndex] = React.useState(0);
    const viewableItemsChanged = React.useRef(({viewableItems}:any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = React.useRef({viewAreaCoveragePercentThreshold: 50}).current;
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
                    [{nativeEvent: {contentOffset: {x: scrollx}}}],
                    {useNativeDriver: false},
                )}
                keyExtractor={(item) => item.value.toString()}
                renderItem={props.renderItem}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
            <Paginator {...props} data={props.data} scrollX={scrollx}/>
        </View>
    );
}
