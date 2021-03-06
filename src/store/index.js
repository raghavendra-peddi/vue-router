import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content: [
      { name: "Sachin", id: "1" },
      { name: "Ganguly", id: "2" },
      { name: "Kohli", id: "3" }
    ]
  },

  getters: {
    content(state) {
      return state.content;
    }
  },

  actions: {
    setValue: ({
      commit
    }, value) => {
      commit('SET_VALUE', value)
    },
  },

  mutations: {
    SET_VALUE(state, content) {
      state.content = content
    },
  }
})
