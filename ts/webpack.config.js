const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/yg/app.ts',
  target: 'node',
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'src'),
          /node_modules\/(dom7|swiper)/
        ],
        test: /\.ts|js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-typescript', '@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
          },
        },
      }, 
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};