module.exports = {
  chainWebpack: config => {
    /* disable insertion of assets as data urls b/c Phaser doesn't support it */
    const rules = [
      { name: 'images', dir: 'img' },
      { name: 'media',  dir: 'media' }
    ]
    rules.forEach(rule => {
      const ruleConf = config.module.rule(rule.name)

      ruleConf.uses.clear()

      ruleConf
        .use('file-loader')
          .loader('file-loader')
          .options({
            name: `${rule.dir}/[name].[hash:8].[ext]`
          })
    })
  },
  devServer: {
    open: true,
    hot: false
  }
}