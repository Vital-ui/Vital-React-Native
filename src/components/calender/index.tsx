import React from "react";
import { View } from "react-native";
import { dayNames } from "./helpers";
import Dates from "./components/Dates";
import Header from "./components/Header";
import type { CalenderProps } from "./types";
import ThemeContext from "../context/context";
import H7 from "../typography/h7";
import { styles } from "./styles";
import { CalendarProvider, useCalendarContext } from "./context/CalendarContext";

const CalendarContent = ({ renderHeader }: { renderHeader?: CalenderProps['renderHeader'] }) => {
    const context = React.useContext(ThemeContext);
    const calendarContext = useCalendarContext();
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
        <View style={[styles.container, calendarContext.styles?.containerStyle]}>
            <Header
                month={date.getMonth()}
                year={date.getFullYear()}
                nextMonth={nextMonth}
                prevMonth={prevMonth}
                renderHeader={renderHeader}
            />
            <View style={styles.dayNamesContainer}>
                {
                    dayNames.map((day, index) => (
                        <View style={styles.dayNameContainer} key={index}>
                            <H7 style={[
                                styles.dayNameText,
                                { color: context.theme.TextColor },
                                calendarContext.styles?.dayStyle
                            ]}>
                                {day}
                            </H7>
                        </View>
                    ))
                }
            </View>
            <View style={[styles.daySeparatorLine, calendarContext.styles?.lineSeparatorStyle]} />
            <Dates
                month={date.getMonth()}
                year={date.getFullYear()}
            />
        </View>
    );
};

const Calender = (props: CalenderProps) => {
    const calendarContextValue = {
        onSelect: props.onSelect,
        selectedDate: props.date,
        minimumDate: props.minimumDate,
        activeDateBackground: props.activeDateBackground,
        styles: props.styles,
    };

    return (
        <CalendarProvider {...calendarContextValue}>
            <CalendarContent renderHeader={props.renderHeader} />
        </CalendarProvider>
    );
};

export default Calender;
