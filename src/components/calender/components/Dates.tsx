import {View} from "react-native";
import React from "react";
import {getDays} from "./helpers";
import DateBox from "./DateBox";
import {DateProps} from "./types";

const Dates = (props: DateProps) => {
    const days = new Array(getDays(new Date(props.year, props.month + 1))).fill(1).map((_, i) => i + 1);
    const lastMonthDays = new Array(getDays(new Date(props.year, props.month))).fill(1).map((_, i) => i + 1);
    const day = new Date(props.year.toString() + "-" + (props.month + 1).toString().padStart(2, "0") + "-01").getUTCDay();
    let firstWeek = days.splice(0, 7 - day);
    const weeks = Math.ceil(days.length / 7);
    if (-7 + firstWeek.length)
        firstWeek = lastMonthDays.slice(-7 + firstWeek.length).concat(firstWeek);
    const minimumDate = React.useMemo(() => {
        if (props.minimumDate) {
            return new Date(props.minimumDate.setHours(0, 0, 0, 0));
        }
        return undefined;
    }, [props.minimumDate]);
    return (
        <View>
            {
                firstWeek[6] &&
                <View style={{flexDirection: "row"}}>
                    {
                        firstWeek.map((day, i) => {
                            return <DateBox
                                key={day + "_" + i}
                                day={day}
                                disabled={day > 20 ? true : minimumDate && new Date(props.year, props.month, day) < minimumDate}
                                {...props}
                            />;
                        })
                    }
                </View>
            }
            {
                new Array(weeks).fill("").map((_, i) => {
                    let temp = days.slice(i * 7, (i + 1) * 7);
                    let flag = false;
                    if (temp.length < 7) {
                        flag = true;
                        temp = temp.concat([1, 2, 3, 4, 5, 6].slice(0, 7 - temp.length));
                    }
                    return <View style={{flexDirection: "row"}} key={i}>
                        {
                            temp.map((day, i) =>
                                <DateBox
                                    key={day + "_" + i}
                                    day={day}
                                    disabled={flag && day >= 1 && day <= 6 ? true : minimumDate && new Date(props.year, props.month, day) < minimumDate}
                                    {...props}
                                />
                            )
                        }
                    </View>;
                })
            }
        </View>
    );
};

export default Dates;
