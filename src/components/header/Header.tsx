import ThemeContext from "../context/context";
import {Dimensions, LayoutChangeEvent, Pressable, StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import H7 from "../typography/h7";
import {HeaderProps} from "../container/types";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import React from "react";
import SVGBack from "../container/arrow-left.svg";
import SVGDrawer from "../container/drawer.svg";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const headerHeight = height * 7 / 96;

function Header(props: HeaderProps) {
    const insets = useSafeAreaInsets();
    const [leftHeight, setLeftHeight] = React.useState(0);
    const [rightHeight, setRightHeight] = React.useState(0);
    const [top, setTop] = React.useState(props.top == undefined ? 0 : props.top);
    React.useEffect(() => {
        if (props.top == undefined && insets.top > top) {
            setTop(insets.top);
        }
    }, [insets]);
    const isCenter = props.headerTextPosition === "center";
    let position = "flex-start";
    switch (props.headerTextPosition) {
        case "center":
            position = "center";
            break;
        case "right":
            position = "flex-end";
            break;
    }
    const onLeftLayout = (event: LayoutChangeEvent) => {
        setLeftHeight(event.nativeEvent.layout.height);
    };
    const onRightLayout = (event: LayoutChangeEvent) => {
        setRightHeight(event.nativeEvent.layout.height);
    };
    return (
        <ThemeContext.Consumer>
            {
                (context) => <View style={[styles.header, {
                    height: headerHeight + top,
                    paddingTop: top,
                    backgroundColor: props.headerColor ? props.headerColor : context.theme.Header,
                    justifyContent: position as ViewStyle["justifyContent"]
                }]}>
                    <View
                        style={[styles.header, {paddingHorizontal: 0}, isCenter ? {
                            position: "absolute",
                            left: width/24,
                            top: top + headerHeight / 2,
                            transform: [{translateY: -leftHeight / 2}]
                        } : undefined]}
                        onLayout={onLeftLayout}
                    >
                        {props.addIcon &&
                            <Pressable
                                style={[styles.headerLeftIcon, props.headerLeftIconStyle, {backgroundColor: props.headerLeftIconBackground}]}
                                onPress={props.addIconAction}>
                                {props.addIcon}
                            </Pressable>
                        }
                        {props.drawerAction
                            ? <Pressable
                                style={[styles.headerLeftIcon, props.headerLeftIconStyle, {backgroundColor: props.headerLeftIconBackground}]}
                                onPress={props.navigation ? props.navigation.openDrawer : undefined}>
                                {props.drawerActionIcon
                                    ? props.drawerActionIcon
                                    : <SVGDrawer
                                        fill={props.headerLeftIconColor ? props.headerLeftIconColor : context.theme.TextColor}
                                        height={"50%"}
                                        width={"50%"}/>
                                }
                            </Pressable>
                            :
                            props.back && <Pressable
                                style={[styles.headerLeftIcon, props.headerLeftIconStyle, {backgroundColor: props.headerLeftIconBackground}]}
                                onPress={() => props.navigation ? props.navigation.goBack() : undefined}>
                                {props.backIcon
                                    ? props.backIcon
                                    : <SVGBack
                                        fill={props.headerLeftIconColor ? props.headerLeftIconColor : context.theme.TextColor}
                                        height={"60%"}
                                        width={"100%"}/>
                                }
                            </Pressable>
                        }
                    </View>
                    <View style={!isCenter ? {
                        flex: 1,
                        justifyContent: position as ViewStyle["justifyContent"]
                    } : undefined}>
                        <H7 style={[{
                            color: context.theme.TextColor,
                            zIndex: 1,
                            textAlign: props.headerTextPosition as TextStyle["textAlign"]
                        }, props.headerTextStyle]}>{props.headerText}</H7>
                    </View>
                    <View
                        style={[styles.header, {paddingHorizontal: 0}, isCenter ? {
                            position: "absolute",
                            right: width/24,
                            top: top + headerHeight / 2,
                            transform: [{translateY: -rightHeight / 2}]
                        } : undefined]}
                        onLayout={onRightLayout}
                    >
                        {props.headerRight}
                    </View>
                </View>
            }
        </ThemeContext.Consumer>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: width / 24,
        flexDirection: "row",
        alignItems: "center",
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerLeftIcon: {
        width: width * 2 / 24,
        height: width * 2 / 24,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: width * 0.02,
        overflow: "hidden",
    },
});
