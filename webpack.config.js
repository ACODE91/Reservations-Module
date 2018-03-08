let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'client/public');
let APP_DIR = path.resolve(__dirname, 'client/app');

let config = {
  entry: `${APP_DIR  }/app.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
 test: /\.jsx$/,
include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
include: APP_DIR,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  node: {
    fs: 'empty',
  },
};

module.exports = config;
