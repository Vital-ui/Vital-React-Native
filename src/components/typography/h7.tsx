import React, { useContext } from "react";
import {Text as NativeText} from "react-native";
import type {TextProps} from "react-native";
import {fontSize} from "./fontSize";
import ThemeContext from "../context/context";

function H7(props: TextProps) {
    const theme = useContext(ThemeContext);
    const [txtProps, setProps] = React.useState({});
    React.useEffect(() => {
        if (Object.keys(props).indexOf("style") !== -1) {
            const temp: TextProps = JSON.parse(JSON.stringify(props));
            delete temp["style"];
            setProps(temp);
        } else {
            setProps(props);
        }
    }, [props]);
    return (
        <NativeText {...txtProps} style={[{ ...theme.fontConfig, color: theme.theme.TextColor }, fontSize.H7, props.style]}>{props.children}</NativeText>
    );
}


export default H7;
