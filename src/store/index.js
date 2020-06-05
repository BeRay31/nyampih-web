import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobileView : false,
  },
  mutations: {
    changeView(params) {
      state.mobileView = params
    }
  },
  actions: {
  },
  modules: {
  }
})
