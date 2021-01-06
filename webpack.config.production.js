const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  entry: path.join(__dirname, 'src/index'),

  mode: 'production',

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

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ],
  },

  output: {
    chunkFilename: 'static/js/[name].chunk.js',
    filename: 'static/js/bundle.js',
    path: path.join(__dirname, 'docs'),
    publicPath: '/grid-styled_components/',
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.json'],
  },

  stats: 'errors-warnings',
}
