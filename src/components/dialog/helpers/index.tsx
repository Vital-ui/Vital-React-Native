import {LayoutAnimation} from "react-native";

export const openModal = (setShown: (value: boolean) => void) => {
    LayoutAnimation.configureNext(
        LayoutAnimation.create(
            200,
            LayoutAnimation.Types.easeInEaseOut,
            LayoutAnimation.Properties.opacity,
        ),
    );
    setShown(true);
};

export const closeModal = (setShown: (value: boolean) => void, onClose ?: () => void) => {
    setShown(false);
    onClose ?.();
};
