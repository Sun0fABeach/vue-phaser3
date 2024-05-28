const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // Vue CLI is in maintenance mode and probably won't fix this
        // https://stackoverflow.com/questions/77752897/feature-flag-vue-prod-hydration-mismatch-details-is-not-explicitly-defined
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      })
    ],
  },

  chainWebpack: config => {
    /* disable insertion of assets as data urls b/c Phaser doesn't support it */
    const rules = ['images', 'media']

    rules.forEach(rule => {
      const ruleConf = config.module.rule(rule)
      ruleConf.type('asset/resource')
    })
  },

  devServer: {
    hot: false
  }
})
