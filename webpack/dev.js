/* eslint-disable import/no-extraneous-dependencies  */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./common');

const port = 3000;
const proxyPort = 3001;
const publicPath = '/hot/';

const { babelLoader, cssLoader, entry, resolve } = common;
module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  resolve,
  entry,
  output: {
    publicPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      babelLoader,
      cssLoader,
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    publicPath,
    open: true,
    hot: true,
    port,
    proxy: {
      '*': {
        target: `http://localhost:${proxyPort}`,
        secure: false,
      },
    },
  },
};
