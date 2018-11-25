module.exports = {
  baseUrl: '/vue',
  chainWebpack: config => {
    config.plugin('html').tap(options => {
      options[0].minify.removeAttributeQuotes = false
      return options
    })
  },
  productionSourceMap:false
}