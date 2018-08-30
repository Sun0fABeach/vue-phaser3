const common = require('./webpack.common.js')
const path = require('path')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].js?[chunkhash]',
    chunkFilename: '[name].js?[chunkhash]'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|mp3|ogg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'assets'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            warnings: false
          }
        }
      })
    ]
  },
  devtool: '#source-map'
})