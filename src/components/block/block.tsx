import React from "react";
import {View, Text, Dimensions, StyleSheet} from "react-native";
import ThemeContext from "../context/context";
import {margin} from "../spacing/margin";
import {fontSize} from "../typography/fontSize";
import type {BlockType, TitleType} from "./types";

const width = Dimensions.get("screen").width;

function Title(props: TitleType) {
    return <ThemeContext.Consumer>
        {
            (context) => <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                {props.titleLeft}
                <Text
                    style={[{...context.fontConfig}, props.blockTitleSize ? props.blockTitleSize : fontSize.H6, props.titleLeft ? margin.ms2 : undefined, props.blockTitleStyle]}>{props.title ? props.title : "Title Goes Here"}</Text>
            </View>
        }
    </ThemeContext.Consumer>;
}

function Block(props: BlockType) {
    const marginSet = props.titleMargin ? props.titleMargin : margin.mb2;
    return (
        <View style={[props.blockMargin ? props.blockMargin : margin.mb5, props.style]}>
            <View style={props.titleFluid ? styles.containerFluid : styles.container}>
                {props.header
                    ? <View
                        style={[marginSet, {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }]}
                    >
                        {props.title ? <Title {...props} /> : <Title {...props} />}
                        {props.blockHeaderRight
                            ? props.blockHeaderRight
                            : <></>
                        }
                    </View>
                    : props.title && <Title {...props} blockTitleStyle={marginSet}/>
                }
            </View>
            <View style={[props.fluid ? styles.containerFluid : styles.container, props.contentContainerStyle]}>
                {props.children}
            </View>
        </View>
    );
}

export default Block;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: width * 1 / 24,
    },
    containerFluid: {
        paddingHorizontal: 0,
    }
});
