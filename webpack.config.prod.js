const base = require('./webpack.config');

// JS 生产模式下模块定义
module.exports = Object.assign({}, base, {
  // Declare the current mode, development mode or production mode
  mode: 'production',
  externals: {
    // Telling the listing libraries is from the third-party and will not 
    // include them while creating bundle.
    // 分别对应四种不同的打包工具
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React' // <script src="xxx/react.min.js"></script>
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  }
});
