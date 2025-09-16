import React from "react";
import { Animated, Dimensions, View } from "react-native";
import ThemeContext from "../context/context";
import type { PaginatorProps } from "./types";

const Paginator = (props: PaginatorProps) => {
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
        Dimensions.get("screen");
    const { theme } = React.useContext(ThemeContext);
    const paginatorWidth = React.useMemo(
        () => (props.fluid ? SCREEN_WIDTH : (SCREEN_WIDTH * 22) / 24),
        [props.fluid],
    );

    // Default values for new props
    const overlapPaginator = props.overlapPaginator !== false; // Default to true
    const paginatorGap = props.paginatorGap ?? 50; // Default to 50

    const paginatorStyle = React.useMemo(() => {
        const baseStyle = {
            flexDirection: "row" as const,
            justifyContent: "center" as const,
            zIndex: 1,
        };

        if (overlapPaginator) {
            return {
                ...baseStyle,
                position: "absolute" as const,
                bottom: 10,
                left: 0,
                right: 0,
            };
        } else {
            return {
                ...baseStyle,
                marginTop: paginatorGap,
            };
        }
    }, [overlapPaginator, paginatorGap]);

    return (
        <View style={paginatorStyle}>
            {props.data.map((_, i) => {
                const inputRange = [
                    (i - 1) * paginatorWidth,
                    i * paginatorWidth,
                    (i + 1) * paginatorWidth,
                ];
                const dotWidth = props.scrollX.interpolate({
                    inputRange,
                    outputRange: [
                        paginatorWidth * 0.02,
                        paginatorWidth * 0.05,
                        paginatorWidth * 0.02,
                    ],
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
                            marginHorizontal: SCREEN_HEIGHT * 0.01,
                            borderRadius: paginatorWidth,
                            height: paginatorWidth * 0.015,
                            width: dotWidth,
                            opacity,
                            backgroundColor:
                                props.DotColor ?? theme.ThemeMutedDark,
                        }}
                    />
                );
            })}
        </View>
    );
};

export default Paginator;
