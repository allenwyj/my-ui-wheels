const path = require('path');

// JS 模块定义
module.exports = {
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
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      },
      // {
      //   test: /\.s([ac])ss$/,
      //   use: [
      //     devMode
      //       ? 'style-loader'
      //       : {
      //           loader: MiniCssExtractPlugin.loader,
      //           options: {
      //             // publicPath: '../'
      //           }
      //         },
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         includePaths: [path.resolve(__dirname, 'stylesheets', 'include')]
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.s([ac])ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
