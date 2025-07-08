import {NativeModules} from "react-native";
import {margin} from "./components/spacing/margin";
import {padding} from "./components/spacing/padding";
import {borderRadius} from "./components/border/borderRadius";
import {height} from "./components/height/height";
import {width} from "./components/width/width";
import {fontSize} from "./components/typography/fontSize";
import {
    setTypographyConfig,
    getTypographyConfig,
    resetTypographyConfig,
    getRootFontSize,
    rem,
} from "./components/typography/config";
import GradientText from "./components/typography/GradientText";
import H1 from "./components/typography/h1";
import H2 from "./components/typography/h2";
import H3 from "./components/typography/h3";
import H4 from "./components/typography/h4";
import H5 from "./components/typography/h5";
import H6 from "./components/typography/h6";
import H7 from "./components/typography/h7";
import H8 from "./components/typography/h8";
import H9 from "./components/typography/h9";
import Container from "./components/container/container";
import Accordion from "./components/accordion/accordion";
import GradientImage from "./components/gradientImage/gradientImage";
import GradientBlock from "./components/gradientBlock/gradientBlock";
import Block from "./components/block/block";
import Checkbox from "./components/checkbox/checkbox";
import RadioButton from "./components/radioButton/radioButton";
import Button from "./components/button";
import Carousel from "./components/carousel/carousel";
import Input from "./components/input/input";
import OTPInput from "./components/otp/otp";
import Dialog from "./components/dialog";
import AppProvider from "./components/appProvider/appProvider";
import BadgeButton from "./components/badgeButton/badgeButton";
import ProgressBar from "./components/progressBar/ProgressBar";
import Switch from "./components/switch";
import Toast from "./components/toast/toast";
import Drawer from "./components/drawer/drawer";
import SegmentedTab from "./components/segmentedTab/segmentedTab";
import Calender from "./components/calender/calender";
import Slider from "./components/slider/Slider";
import Header from "./components/header/Header";

const {ScreenOrientation, Insets, InAppExperience, NavigationBar} = NativeModules;

export {
    margin,
    padding,
    borderRadius,
    height,
    width,
    fontSize,
    setTypographyConfig,
    getTypographyConfig,
    resetTypographyConfig,
    getRootFontSize,
    rem,
    GradientText,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    H7,
    H8,
    H9,
    Container,
    Calender,
    Accordion,
    GradientImage,
    GradientBlock,
    Block,
    Checkbox,
    RadioButton,
    Button,
    BadgeButton,
    Carousel,
    Input,
    OTPInput,
    Dialog,
    AppProvider,
    ProgressBar,
    Switch,
    Toast,
    Drawer,
    SegmentedTab,
    Slider,
    Header,
    ScreenOrientation,
    Insets,
    InAppExperience,
    NavigationBar
};
