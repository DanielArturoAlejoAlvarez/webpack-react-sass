const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'../dist'),
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    rules: [
        {
          test: /\.(sc|c|sa)ss$/,
          use: [
            miniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(gif|jpg|jpeg|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'img/',
                useRelativePath: true
              }
            }
          ]
        },
        {
          test: /\.hbs$/,
          use: [
            {
              loader: 'handlebars-loader'
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      //template: './src/index.hbs'
      template: './src/index.html'
    }),
    new miniCssExtractPlugin({
      filename: 'css/main.css'
    })
  ]
}
