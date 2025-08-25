const path = require("path");
const { getDefaultConfig } = require("@react-native/metro-config");
const { getConfig } = require("react-native-builder-bob/metro-config");
const pkg = require("../package.json");

const root = path.resolve(__dirname, "..");
const defaultConfig = getDefaultConfig(__dirname);

// Configure SVG transformer
defaultConfig.transformer = {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
};
defaultConfig.resolver = {
    ...defaultConfig.resolver,
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "svg"),
    sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
};

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = getConfig(defaultConfig, {
    root,
    pkg,
    project: __dirname,
});