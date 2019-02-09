import Vue from 'vue'
import Vuex from 'vuex'

import steps from './steps'

Vue.use(Vuex)

const store = {
  modules: {
    steps
  }
}

// noinspection JSCheckFunctionSignatures
export default new Vuex.Store(store)
