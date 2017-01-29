var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry:"./src/index.jsx",
  output:{
    path: path.resolve(__dirname,"/dist"),
    filename: bundle.js,
    publicPath: "dist/"
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude:/node_modules/,
        loader: "babel"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.css$/,
        loader: "style!css?modules!postcss"
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("Copyright Maggie Ryder 2017."),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"
    })
  ],
  postcss: [
    require('autoprefixer')
  ],
  devServer: {
    contentBase: "./dist",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}
