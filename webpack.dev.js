const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|mp3|ogg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
})
