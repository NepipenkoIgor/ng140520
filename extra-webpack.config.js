const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (config) => {
  console.log(config.mode)
  if (config.mode !== 'development') {
    config.plugins.push(new CompressionPlugin())
  }
  return config;
};
