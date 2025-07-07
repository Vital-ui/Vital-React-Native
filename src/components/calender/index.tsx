import React from "react";
import { View, Text } from "react-native";
import { dayNames } from "./helpers";
import Dates from "./components/Dates";
import Header from "./components/Header";
import type { CalenderProps } from "./types";
import ThemeContext from "../context/context";
import { styles } from "./styles";

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
        <View style={[styles.container, props.styles?.containerStyle]}         >
            <Header
                month={date.getMonth()} year={date.getFullYear()} nextMonth={nextMonth} prevMonth={prevMonth}
                headerStyle={props.styles?.headerStyle} renderHeader={props.renderHeader}
            />
            <View style={[styles.dayNamesContainer]}>
                {
                    dayNames.map((day, index) => (
                        <View style={styles.dayNameContainer} key={index}>
                            <Text style={[
                                context.fontConfig,
                                styles.dayNameText,
                                { color: context.theme.TextColor },
                                props.styles?.dayStyle
                            ]}>
                                {day}
                            </Text>
                        </View>
                    ))
                }
            </View>
            <View style={[styles.daySeparatorLine, props.styles?.lineSeparatorStyle]} />
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
