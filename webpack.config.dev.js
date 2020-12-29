const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// JS 开发模式下模块定义
module.exports = Object.assign({}, base, {
  // Declare the current mode, development mode or production mode
  mode: 'development',
  plugins: [
    // automatically adding the latest js script into .html file
    new HtmlWebpackPlugin({
      title: 'Simple UI',
      template: 'index.html'
    })
  ]
});
