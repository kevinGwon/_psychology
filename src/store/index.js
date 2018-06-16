import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import psychology from '@/psychology.json'
import {cover, archive} from '@/list.json'

let store = new Vuex.Store({
  state: {
    coverList: cover,
    archiveList: archive,
    psychologyLists: psychology,

    key: 'seunggon'
  },
  getters: {
    psychologyLists(state) {
      return state.psychologyLists
    },
    getInfo(state) {
      return state.psychologyLists[state.key]
    }
  },
  mutations: {
    changePage(state, payload) {
      return state.key = payload
    }
  }
})

export default store;
