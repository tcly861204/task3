const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [
      path.join(__dirname, '/src/public/scripts/praise.js'),
    ],
    xtag: [
      path.join(__dirname, '/src/public/scripts/xtag.js')
    ]
  },
  output: {
    filename: 'public/scripts/[name]-[hash:5].js',
    path: path.join(__dirname, './dev')
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'public/scripts/common/[name]-[hash:5].min.js',
    }),
    new HtmlWebpackPlugin({ 
      filename: './views/layout.html',
      template: 'src/views/layout.html',
      inject:false
    }),
    new HtmlWebpackPlugin({ 
      filename: './views/index.html',
      template: 'src/views/index.html'
    })
  ]
};