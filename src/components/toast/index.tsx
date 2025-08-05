import React from 'react';
import { Dimensions, LayoutChangeEvent } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type {ToastProps} from './types';
import styles from './styles';

// TODO: Replace styles with library utility for width
const Toast = (props: ToastProps) => {
    const left = Dimensions.get('window').width / 2;
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(100);
    const active = useSharedValue(false);
    const toastAnimatedStyle = useAnimatedStyle(() => {
        return {
            top: withTiming(active.value ? props.top ? props.top : 20 : -height, {
                duration: 500,
                easing: active.value ? Easing.in(Easing.elastic(1.5)) : Easing.out(Easing.elastic(1.5)),
            }),

            position: 'absolute',
            left: left,
            transform: [{ translateX: -width / 2 }],
            zIndex: 999,
            overflow: 'hidden',
        };
    });

    const onLayout = (event: LayoutChangeEvent) => {
        if (width == 0) {
            setWidth(event.nativeEvent.layout.width);
            setHeight(event.nativeEvent.layout.height + 10);
        }
    };

    React.useEffect(() => {
        active.value = props.open;
        if (!props.open) {
            setTimeout(() => {
                setWidth(0);
            }, 500);
        }
    }, [props.open]);

    return (
        <Animated.View style={[styles.toastContainer, props.style, toastAnimatedStyle]} onLayout={onLayout}>
            {props.children}
        </Animated.View>
    );
};

export default Toast;



