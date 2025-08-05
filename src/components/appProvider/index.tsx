import React from "react";
import ThemeContext from "../context/context";
import {themeState, DarkMode, LightMode} from "../context/initialState";
import type {AppProviderProps} from "./types";

const AppProvider = (props: AppProviderProps) => {
    let theme = themeState;

    if (props.theme) {
        theme = {...theme, ...props.theme};
    }

    if (props.isDark) {
        theme = {...theme, ...DarkMode};
        if (props.darkMode) {
            theme = {...theme, ...props.darkMode};
        }
    } else {
        theme = {...theme, ...LightMode};
        if (props.darkMode) {
            theme = {...theme, ...props.lightMode};
        }
    }

    React.useEffect(() => {
        if (props.getTheme !== undefined) {
            props.getTheme(theme);
        }
    }, [props, theme]);

    return (
        <ThemeContext.Provider value={{theme: theme, fontConfig: props.fontConfig ? props.fontConfig : {}}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default AppProvider;
