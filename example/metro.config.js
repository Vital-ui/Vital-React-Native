const path = require("path");
const {getDefaultConfig} = require("@react-native/metro-config");
const {getConfig} = require("react-native-builder-bob/metro-config");
const pkg = require("../package.json");

const root = path.resolve(__dirname, "..");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 *
 */

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;
defaultConfig.transformer = {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
};
defaultConfig.resolver = {
    ...defaultConfig.resolver,
    assetExts: assetExts.filter(ext => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
};

module.exports = getConfig(defaultConfig, {
    root,
    pkg,
    project: __dirname,
});
