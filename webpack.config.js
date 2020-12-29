const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// JS 模块定义
module.exports = {
  // Declare the current mode, development mode or production mode
  mode: 'development',
  // The entry of the application, normally is './src'
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // Output
  output: {
    path: path.resolve(__dirname, 'dist/lib'), // 根据操作系统的不同，把输出路径定义，避免'\'问题
    library: 'SUI', // 库的名字
    libraryTarget: 'umd' // 输出格式，一般是umd，unify module dev
  },
  module: {
    rules: [
      // Set how to transpile .tsx
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader' // Transpile .tsx to .ts file
      }
    ]
  },
  plugins: [
    // automatically adding the latest js script into .html file
    new HtmlWebpackPlugin({
      title: 'Simple UI',
      template: 'index.html'
    })
  ],
  externals: {
    // Telling the listing libraries is from the third-party
    // 分别对应四种不同的打包工具
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'// <script src="xxx/react.min.js"></script>
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  }
};
