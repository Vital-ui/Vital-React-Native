import React from "react";
import {themeState} from "./initialState";

const ThemeContext = React.createContext({theme: themeState, fontConfig: {}});
export default ThemeContext;
