import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// Masonry Plugin
import { VueMasonryPlugin } from 'vue-masonry'

import store from './store'
Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
