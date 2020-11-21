/* eslint-disable import/no-extraneous-dependencies  */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./common');

const port = 3000;
const proxyPort = 3001;

const { babelLoader, cssLoader, entry, resolve } = common;
module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'eval-cheap-source-map',
  resolve,
  entry,
  output: {
    publicPath: '/hot/',
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
