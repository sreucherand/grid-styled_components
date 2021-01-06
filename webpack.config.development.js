const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const PORT = parseInt(process.env.PORT, 10) || 3025

module.exports = {
  devServer: {
    port: PORT,
    historyApiFallback: true,
  },

  devtool: 'eval-cheap-module-source-map',

  entry: path.join(__dirname, 'src/index'),

  mode: 'development',

  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        test: /\.js$/,
      },
    ],
  },

  output: {
    chunkFilename: 'static/js/[name].chunk.js',
    filename: 'static/js/bundle.js',
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.json'],
  },

  stats: 'errors-warnings',
}
