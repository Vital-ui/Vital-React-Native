import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {dayNames} from "./components/helpers";
import {padding} from "../spacing/padding";
import Dates from "./components/Dates";
import Header from "./components/Header";
import {CalenderProps} from "./types";
import ThemeContext from "../context/context";


const Calender = (props: CalenderProps) => {
    const context = React.useContext(ThemeContext);
    const [date, setDate] = React.useState(new Date());
    const nextMonth = () => {
        const temp = date;
        setDate(new Date(temp.setMonth(temp.getMonth() + 1)));
    };
    const prevMonth = () => {
        const temp = date;
        setDate(new Date(temp.setMonth(temp.getMonth() - 1)));
    };
    return (
        <View
            style={[
                {
                    borderWidth: StyleSheet.hairlineWidth * 2,
                    borderColor: "rgb(228, 233, 242)",
                    borderRadius: 4
                },
                props.styles?.containerStyle
            ]}
        >
            <Header
                month={date.getMonth()} year={date.getFullYear()} nextMonth={nextMonth} prevMonth={prevMonth}
                headerStyle={props.styles?.headerStyle} renderHeader={props.renderHeader}
            />
            <View style={[{flexDirection: "row", justifyContent: "space-evenly"}, padding.pb1]}>
                {
                    dayNames.map((day, index) => (
                        <View style={{flex: 1, alignItems: "center"}} key={index}>
                            <Text style={[{
                                ...context.fontConfig,
                                color: context.theme.TextColor,
                                fontWeight: "bold",
                                width: "100%",
                                textAlign: "center"
                            }, props.styles?.dayStyle]}>{day}</Text>
                        </View>
                    ))
                }
            </View>
            <View style={[styles.daySeparatorLine, props.styles?.lineSeparatorStyle]}/>
            <Dates
                month={date.getMonth()}
                year={date.getFullYear()}
                onSelect={props.onSelect}
                selectedDate={props.date}
                dateStyle={props.styles?.dateStyle}
                activeDateStyle={props.styles?.activeDateStyle}
                activeDateBackground={props.activeDateBackground}
                minimumDate={props.minimumDate}
            />
        </View>
    );
};

export default Calender;


const styles = StyleSheet.create({
    daySeparatorLine: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgb(228, 233, 242)",
        borderRadius: 4
    }
});
