
const file = require("file-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const lintJS = require('./js.lint');
const path = require('path');
const miniCss = require('mini-css-extract-plugin');

var config  = {
  entry: {
   index: './src/index.js',
   contacts :'./src/contacts.js',
   about :'./src/about.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ["eslint-loader"]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test:/\.(s*)css$/,
        use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      { 
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, 
        loader: 'file-loader' ,
        options: {
          outputPath: 'images',
          name: '[name].[ext]'
        }
      }
    ]   
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.pug',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/contacts.pug',
      chunks: ['contacts']
    }),
    new miniCss({
      filename: 'style[name].css',
    }),
  ],

};
module.exports = (env, argv) =>
{
return config
};