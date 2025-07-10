import { Image, TouchableHighlight, View, Text } from "react-native";
import React from "react";
import { monthNames } from "../../helpers";
import type { HeaderProps } from "../../types";
import ThemeContext from "../../../context/context";
import { styles } from "./styles";
import { useCalendarContext } from "../../context/CalendarContext";

const Header = (props: HeaderProps) => {
    const context = React.useContext(ThemeContext);
    const calendarContext = useCalendarContext();

    return (
        <View style={styles.container}>
            {
                props.renderHeader ?
                    props.renderHeader(monthNames[props.month], props.year) :
                    <Text
                        style={[
                            context.fontConfig,
                            { color: context.theme.TextColor, fontSize: require('react-native').Dimensions.get('screen').width * 0.055 },
                            styles.headerText,
                            calendarContext.styles?.headerStyle
                        ]}
                    >
                        {monthNames[props.month]} {props.year}
                    </Text>
            }
            <View style={styles.buttonContainer}>
                <TouchableHighlight
                    onPress={props.prevMonth}
                    underlayColor={context.theme.TextColor + "11"}
                    style={styles.button}
                >
                    <Image
                        source={require("../../assets/angle-left.png")}
                        style={[
                            styles.buttonImage,
                            { tintColor: context.theme.TextColor }
                        ]}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={props.nextMonth}
                    underlayColor={context.theme.TextColor + "11"}
                    style={styles.button}
                >
                    <Image
                        source={require("../../assets/angle-right.png")}
                        style={[
                            styles.buttonImage,
                            { tintColor: context.theme.TextColor }
                        ]}
                    />
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default Header; 