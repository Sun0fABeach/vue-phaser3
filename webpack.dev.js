const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  plugins: [
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 8080,
      server: { baseDir: ['dist'] },
      watch: true,
      injectCss: true
    })
  ],
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
})
