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
    member: ''
  },
  getters: {
    psychologyLists(state) {
      return state.psychologyLists
    },
    getInfo(state) {
      if(state.member == '') {
        window.location = '/psychology'
        return false;
      }
      return state.psychologyLists[state.member]
    }
  },
  mutations: {
    changePage(state, payload) {
      return state.member = payload
    }
  }
})

export default store;
