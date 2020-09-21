module.exports = {
  entry: {
    bundle0: './src/colors/index.js',
    bundle1: './src/signin/index.js',
    bundle2: './src/newcolor/index.js',
    bundle3: './src/onecolor/index.js',
    bundle4: './src/profile/index.js',
    bundle5: './src/admin/index.js',
  },
  babelLoader: {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
