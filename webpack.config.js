var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    bundle: "./entry.js"
  },
  output:{
    path: './dist',
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.tmpl'),
      filename: './index.html',
      inject: true,
      chunks: ['bundle']
    }),
    new ExtractTextPlugin('./style.css', {
      disable: false,
      allChunks: true
    })
  ],
  module: {
    loaders:[
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        inclued: path.join(__dirname, 'components')
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclued: /node_modules/,
        inclued: __dirname
      },
    ]
  }
}
