module.exports = {
  chainWebpack: config => {
    /* disable insertion of assets as data urls if they are used by Phaser */
    const rules = [
      {
        name: 'images',
        dir: 'img',
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/
      },
      {
        name: 'media',
        dir: 'media',
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/
      }
    ]

    rules.forEach(rule => {
      config.module.rule(rule.name)
        .exclude
          .add(/src\/game\/assets/)

      config.module.rule(`${rule.name}-phaser`)
        .test(rule.test)
        .include
          .add(/src\/game\/assets/)
          .end()
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