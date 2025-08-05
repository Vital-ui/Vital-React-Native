// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import {View} from "react-native";
import {margin} from "../spacing/margin";
import type {BlockType} from "./types";
import Title from "./title";
import styles from "./styles";

function Block(props: BlockType) {
    const marginSet = props.titleMargin ?? margin.mb2;
    const blockMargin = props.blockMargin ?? margin.mb5;
    return (
        <View style={[blockMargin, props.style]}>
            <View
                style={
                    props.titleFluid ? styles.containerFluid : styles.container
                }
            >
                {props.header ? (
                    <View style={[marginSet, styles.headerStyle]}>
                        <Title {...props} />
                        {props.blockHeaderRight ?? null}
                    </View>
                ) : (
                    props.title && (
                        <Title {...props} blockTitleStyle={marginSet} />
                    )
                )}
            </View>
            <View
                style={[
                    props.fluid ? styles.containerFluid : styles.container,
                    props.contentContainerStyle,
                ]}
            >
                {props.children}
            </View>
        </View>
    );
}

export default Block;


