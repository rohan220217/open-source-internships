import Vue from 'vue'
import VueRouter from 'vue-router'
import Osi from '../views/Osi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Osi',
    component: Osi
  },
  {
    path: '/about',
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
  routes,  
})

export default router
