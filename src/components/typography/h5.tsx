import React from "react";
import {Text, TextProps} from "react-native";
import {fontSize} from "./fontSize";
import ThemeContext from "../context/context";

function H5(props: TextProps) {
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
        <ThemeContext.Consumer>
            {
                (context) => <Text {...txtProps} style={[{...context.fontConfig, color: context.theme.TextColor}, fontSize.H5, props.style]}>{props.children}</Text>
            }
        </ThemeContext.Consumer>
    );
}


export default H5;
