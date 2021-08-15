import Vue from 'vue'
import VueRouter from 'vue-router'
import Osi from '../views/Osi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/open-source-internships',
    name: 'Osi',
    component: Osi
  },
  {
    path: '/open-source-internships/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes,
  mode: 'history'
})

export default router
