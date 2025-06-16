import {ProgressBarProps} from "../progressBar/types";
import React from "react";

export type SliderProps = Omit<ProgressBarProps, "animationSpeed"> & {
    onChange: (_: number) => null | void,
    disabled?: boolean,
    thumbBackground?: React.ReactChild | React.ReactFragment,
    initialProgress?: number
}
