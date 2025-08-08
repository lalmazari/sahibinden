// metro.config.js
/* eslint-env node */
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// ✅ Add NativeWind support
module.exports = withNativeWind(config, {
  input: "./app/globals.css",
});
