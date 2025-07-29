import React, {useContext, useEffect} from "react";
import {Platform, UIManager, LayoutAnimation, View, Pressable} from "react-native";
import SVGUp from "./assets/chevron-up.svg";
import SVGDown from "./assets/chevron-down.svg";
import ThemeContext from "../context/context";
import type {AccordionProps} from "./types";
import {componentStyles} from "./styles";

export default function Accordion(props: AccordionProps) {

    const {title, styles={}, open, setOpen, children, showIcon=false} = props;
    const [expanded, setExpanded] = React.useState(false);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }, []);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.Presets.easeInEaseOut,
        );
        if (setOpen) {
            setOpen();
        }
        setExpanded(!expanded);
    };
    const isOpen = open !== undefined ? open : expanded;
    return (
        <View style={styles.style}>
            <Pressable style={[componentStyles.title, styles.titleStyle]} onPress={toggleExpand}>
                <View style={componentStyles.titleText}>
                    {title}
                </View>
                {showIcon && <View style={componentStyles.titleBtn}>
                    {isOpen
                        ? <SVGUp fill={theme.TextColor} height={14} width={14}/>
                        : <SVGDown fill={theme.TextColor} height={14} width={14}/>
                    }
                </View>}
            </Pressable>
            {isOpen && <View style={[styles.bodyStyle, {overflow: "hidden"}]}>
                {children}
            </View>
            }
        </View>
    );
}


