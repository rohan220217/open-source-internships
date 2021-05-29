module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/open-source-internships/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
