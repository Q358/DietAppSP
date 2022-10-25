const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
// Allows it to interpret cjs files
defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;