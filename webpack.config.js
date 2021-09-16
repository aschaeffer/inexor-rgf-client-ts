const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    graphql: './src/graphql.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Inexor - Reactive Graph Flow - Graph Tools',
      chunks: ['main']
    }),
    new CopyWebpackPlugin({
      patterns: [
        // {
        //   from: './node_modules/altair-static/build/dist/assets',
        //   to: 'assets/'
        // },
      ]
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'bundle'),
  },
};
