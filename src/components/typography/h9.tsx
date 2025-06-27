import React, { useContext } from "react";
import {Text} from "react-native";
import type {TextProps} from "react-native";
import {fontSize} from "./fontSize";
import ThemeContext from "../context/context";

function H9(props: TextProps) {
    const theme = useContext(ThemeContext);
    const [txtProps, setProps] = React.useState({});
    
    React.useEffect(() => {
        if (Object.keys(props).indexOf("style") !== -1) {
            const temp = JSON.parse(JSON.stringify(props));
            delete temp["style"];
            setProps(temp);
        } else {
            setProps(props);
        }
    }, [props]);
    return (
        <Text {...txtProps} style={[{ ...theme.fontConfig, color: theme.theme.TextColor }, fontSize.H9, props.style]}>{props.children}</Text>
    );
}


export default H9;
