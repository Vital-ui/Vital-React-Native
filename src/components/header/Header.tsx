import React from "react";
import ThemeContext from "../context/context";
import {Dimensions, StyleSheet, View} from "react-native";
import {HeaderProps} from "./types";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const headerHeight = height * 7 / 96;

function Header(props: HeaderProps) {
    const context = React.useContext(ThemeContext);
    const top = props.top ?? 0;

    return (
        <View style={[styles.header, {
            ...props.style,
            height: headerHeight + top,
            paddingTop: top,
            backgroundColor: props.style?.backgroundColor ?? context.theme.Header,
        }]}>
            {props.headerLeft}
            <View style={{flex: 1}}>
                {props.headerContent}
            </View>
            {props.headerRight}
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: width / 24,
    }
});
