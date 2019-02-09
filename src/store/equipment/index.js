import { changeInBoundaries } from '@/utils'

// TODO: Organize config for app in better way
const T_MAX = 350
const T_MIN = 20
const DELTA_T = 2

const state = {
  T: {
    min: T_MIN, // Read-only
    max: T_MAX, // Read-only
    cur: 20,
    peak: 20
  },
  V: {
    input: 1,
    output: 0
  },
  dV: DELTA_T / (T_MAX - T_MIN), // Read-only
  dT: DELTA_T, // Read-only
  Terr: 5,
  stoveMode: 0,
  tickDelays: [
    500,
    1000,
    2000,
    4000
  ]
}

const getters = {
  delay: state => state.tickDelays[state.stoveMode],
  isTMax: state => state.T.cur === state.T.max,
  isTMin: state => state.T.cur === state.T.min,
  isStoveOn: state => state.stoveMode > 0,
  stoveModesTotal: state => state.tickDelays.length
}

const mutations = {
  SET_STOVE_MODE (state, mode) {
    state.stoveMode = mode
  },
  SET_T (state, T) {
    changeInBoundaries(state.T, 'cur', state.T.min, state.T.max, T)
  },
  SET_PEAK_T (state) {
    state.T.peak = state.T.cur
  },
  SET_INPUT_V (state, V) {
    changeInBoundaries(state.V, 'input', 0, 1, V)
  },
  SET_OUTPUT_V (state, V) {
    changeInBoundaries(state.V, 'output', 0, 1, V)
  }
}

const actions = {
  changeT ({ commit, state, getters }) {
    commit('SET_T', state.dT * (getters.isStoveOn ? 1 : -1))

    if (state.T.cur > state.T.peak) {
      commit('SET_PEAK_T')
    }
  }
}

const namespaced = true

export default {
  state,
  actions,
  getters,
  mutations,
  namespaced
}
