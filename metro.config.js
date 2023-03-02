const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
// Allows it to interpret cjs files
defaultConfig.resolver.assetExts.push("cjs");

const blackList = /.*git.*|.*android.*|.*__fixtures__.*|.*node_modules.*|.*react.*|.*dist.*|.*website\\node_modules.*|.heapCapture\\bundle.js|.*__tests__.*/gm

module.exports = {
	resolver: {
		blockList: blackList,
		blackListRE: blackList,
	}
};

module.exports = defaultConfig;