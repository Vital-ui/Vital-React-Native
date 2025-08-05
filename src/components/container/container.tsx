import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Pressable,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    ImageBackground,
    ViewStyle,
    LayoutChangeEvent, TextStyle
} from "react-native";
import SVGBack from "./arrow-left.svg";
import SVGDrawer from "./drawer.svg";
import H7 from "../typography/h7";
import ThemeContext from "../context/context";
import type {
    SafeAreaContainerProps,
    HeaderProps,
    CoreContainerProps
} from "./types";

let global_bottom = 0;
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const headerHeight = height * 7 / 96;

function Header(props: HeaderProps) {
    const insets = {
        top: 0
    };
    const [leftHeight, setLeftHeight] = React.useState(0);
    const [rightHeight, setRightHeight] = React.useState(0);
    const [top, setTop] = React.useState(0);
    React.useEffect(() => {
        if (insets.top > top) {
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
                            left: width / 24,
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
                            right: width / 24,
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

function KeyboardAvoidingContainer(props: CoreContainerProps) {
    const insets = {
        top: 0
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{height: height - props.bottom}}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={0}
                style={[props.fluid ? styles.containerFluid : styles.container]}
                contentContainerStyle={{
                    height: props.header ? height - headerHeight - props.bottom - insets.top : height - props.bottom,
                    paddingTop: props.header ? 0 : insets.top
                }}
                {...props.scrollViewProps}
            >
                <View style={props.style}>
                    {props.children}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

function StaticContainer(props: CoreContainerProps) {
    const insets = {
        top: 0
    };
    return (
        <View style={[props.fluid ? styles.containerFluid : styles.container, {
            height: props.header ? height - headerHeight - props.bottom - insets.top : height - props.bottom,
            paddingTop: props.header ? 0 : insets.top
        }]}>
            <View style={props.style}>
                {props.children}
            </View>
        </View>
    );
}

function SafeAreaContainer(props: SafeAreaContainerProps) {
    const insets = {
        bottom: 0
    };
    if (insets.bottom && (insets.bottom > global_bottom) || props.bottom != undefined) {
        global_bottom = props.bottom == undefined ? insets.bottom : props.bottom;
    }
    return (
        <ThemeContext.Consumer>
            {
                (context) => <View style={{
                    flex: 1,
                    backgroundColor: props.backgroundColor ? props.backgroundColor : context.theme.Body,
                }}>
                    {props.bgImg
                        ? <ImageBackground
                            source={props.bgImg}
                            style={{height: height - global_bottom, width: "100%"}}
                            imageStyle={props.bgImgStyle}
                        >
                            {props.header && <Header {...props} />}
                            {props.keyboardAvoiding
                                ? <KeyboardAvoidingContainer {...props} bottom={global_bottom}/>
                                : <StaticContainer {...props} bottom={global_bottom}/>
                            }
                        </ImageBackground>
                        : <>
                            {props.header && <Header {...props} />}
                            {props.keyboardAvoiding
                                ? <KeyboardAvoidingContainer {...props} bottom={global_bottom}/>
                                : <StaticContainer {...props} bottom={global_bottom}/>
                            }
                        </>
                    }
                </View>
            }
        </ThemeContext.Consumer>
    );
}

export default function Container(props: SafeAreaContainerProps) {
    return (
        <SafeAreaContainer {...props}/>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: width / 24,
    },
    containerFluid: {
        paddingHorizontal: 0,
    },
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
