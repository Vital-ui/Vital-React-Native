import {Dimensions, Image, Text, TouchableHighlight, View} from "react-native";
import React from "react";
import {padding} from "../../spacing/padding";
import {monthNames} from "./helpers";
import {borderRadius} from "../../border/borderRadius";
import {HeaderProps} from "./types";
import ThemeContext from "../../context/context";

const Header = (props: HeaderProps) => {
    const context = React.useContext(ThemeContext);
    return (
        <View style={[{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}, padding.p2]}>
            {
                props.renderHeader ?
                    props.renderHeader(monthNames[props.month], props.year) :
                    <Text
                        style={[
                            {
                                ...context.fontConfig,
                                color: context.theme.TextColor,
                                fontSize: Dimensions.get("screen").width * 0.055,
                                fontWeight: "bold",
                                ...padding.px3, ...padding.py2
                            },
                            props.headerStyle
                        ]}
                    >
                        {monthNames[props.month]} {props.year}
                    </Text>
            }
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <TouchableHighlight
                    onPress={props.prevMonth}
                    underlayColor={context.theme.TextColor + "11"}
                    style={[padding.px3, padding.py2, borderRadius.br2]}
                >
                    <Image source={require("./angle-left.png")} style={{
                        height: Dimensions.get("screen").width * 0.04,
                        width: Dimensions.get("screen").width * 0.04,
                        tintColor: context.theme.TextColor
                    }}/>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={props.nextMonth}
                    underlayColor={context.theme.TextColor + "11"}
                    style={[padding.px3, padding.py2, borderRadius.br2]}
                >
                    <Image source={require("./angle-right.png")} style={{
                        height: Dimensions.get("screen").width * 0.04,
                        width: Dimensions.get("screen").width * 0.04,
                        tintColor: context.theme.TextColor
                    }}/>
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default Header;
