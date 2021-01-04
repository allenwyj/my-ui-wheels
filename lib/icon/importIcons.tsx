let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../icons', true, /\.svg$/));
} catch (error) {
  // no need to have this in tests
  // console.log(error);
}
