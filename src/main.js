import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// Masonry Plugin
import { VueMasonryPlugin } from 'vue-masonry'

// Google Analytics
// import VueGtag from "vue-gtag";
// Vue.use(VueGtag, {
//   config: { id: "UA-274242241-1 " }
// });

import store from './store'
Vue.use(VueMasonryPlugin)



Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
