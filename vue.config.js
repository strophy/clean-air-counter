module.exports = {
  publicPath: '',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.externals = {
        'vue': 'Vue',
        //'vue-i18n': 'vue-i18n'
      },
      config.optimization = {
        splitChunks: false
      }
    } else {
      config.mode = 'development'
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
