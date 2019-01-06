const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const CSSLoaders = [
  {loader: 'style-loader'},
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      // minimize: !devMode
      modules: true,
      // importLoader: 2
    }
  },
  {
    loader:'postcss-loader',
    options: {
      sourceMap: true,
      plugins: [autoprefixer()]
    }
  }
];

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry:'./src/index.jsx',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude:/node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: CSSLoaders
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('Copyright Maggie Ryder 2017.'),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html',
      filename: './index.html'
    })
  ],
  // postcss: [
  //   require('autoprefixer')
  // ],
  devServer: {
    contentBase: './dist',
    // colors: true,
    historyApiFallback: true//,
    // inline: true
    // hot: true
  }
}
