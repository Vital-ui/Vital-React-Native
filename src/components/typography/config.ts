import type { TypographyConfig } from "./types";

export const ROOT_FONT_SIZE = 16;

// Default configuration
export const defaultTypographyConfig: TypographyConfig = {
  rootFontSize: ROOT_FONT_SIZE,
};

// Global configuration instance
let typographyConfig: TypographyConfig = {...defaultTypographyConfig};

// Configuration functions
export const setTypographyConfig = (config: Partial<TypographyConfig>) => {
  typographyConfig = {...typographyConfig, ...config};
};

export const getTypographyConfig = (): TypographyConfig => {
  return {...typographyConfig};
};

export const resetTypographyConfig = () => {
  typographyConfig = {...defaultTypographyConfig};
};

// Helper function to get current root font size
export const getRootFontSize = (): number => {
  return typographyConfig.rootFontSize;
};

// Helper function to convert rem-like values using current config
export const rem = (value: number): number => {
  return typographyConfig.rootFontSize * value;
}; 

// small test

setTypographyConfig({rootFontSize: 16});

console.log(getRootFontSize());
console.log(rem(1));