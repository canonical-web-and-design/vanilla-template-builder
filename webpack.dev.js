const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
});
