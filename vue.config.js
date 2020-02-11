module.exports = {
  publicPath: '',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    externals: {
      'vue': 'Vue'
      /*'vue-i18n': 'vue-i18n',
      'jquery': 'jquery',*/
    }
  },
  filenameHashing: false,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
