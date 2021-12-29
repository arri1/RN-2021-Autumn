/**
 * Metro configuration for React Native With Apollo Client Workaround
 * https://github.com/apollographql/apollo-client/blob/main/CHANGELOG.md#apollo-client-354-2021-11-19
 *
 * @format
 */

const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
exports.resolver = {
  ...defaultResolver,
  sourceExts: [
    ...defaultResolver.sourceExts,
    "cjs",
  ],
};