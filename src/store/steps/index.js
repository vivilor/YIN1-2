import TextContent from 'assets/content'

const state = {
  current: 0,
  total: Object.keys(TextContent.steps).length || 0, // Read-only
  isRestarted: true
}

const mutations = {
  SET_CURRENT_STEP (state, newStep) {
    state.current = newStep
  },
  TOGGLE_IS_RESTARTED (state) {
    state.isRestarted = !state.isRestarted
  }
}

const actions = {
  setRestarted ({ state, commit }) {
    if (state.isRestarted) {
      commit('TOGGLE_IS_RESTARTED')
    }
  },
  unsetRestarted ({ state, commit }) {
    if (!state.isRestarted) {
      commit('TOGGLE_IS_RESTARTED')
    }
  },
  goForward ({ state, commit, dispatch }) {
    if (state.current < state.total - 1) {
      commit('SET_CURRENT_STEP', state.current + 1)
      dispatch('setRestarted')
    }
  },
  goToStart ({ commit, dispatch }) {
    commit('SET_CURRENT_STEP', 0)
    dispatch('setRestarted')
  }
}

const namespaced = true

export default {
  state,
  actions,
  mutations,
  namespaced
}
