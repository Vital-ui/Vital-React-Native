import type React from "react";

export type AppProviderProps = {
    theme?: object;
    isDark?: boolean;
    darkMode?: object;
    lightMode?: object;
    getTheme?: ((_: object) => void) | undefined;
    children: React.ReactNode;
    fontConfig?: object;
}
