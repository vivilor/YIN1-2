import Vue from 'vue'
import Vuex from 'vuex'

import steps from './steps'
import equipment from './equipment'

Vue.use(Vuex)

const store = {
  modules: {
    steps,
    equipment
  }
}

// noinspection JSCheckFunctionSignatures
export default new Vuex.Store(store)
