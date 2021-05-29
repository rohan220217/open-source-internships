import Vue from 'vue'
import Vuex from 'vuex'
import competition from './modules/competition'
import program from './modules/program'
import university from './modules/university'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    competition,
    program,
    university,
  }
})
