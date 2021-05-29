module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Open-Source-Internships/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
