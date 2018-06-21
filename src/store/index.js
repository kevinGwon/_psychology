import Vue from 'vue'
import Vuex from 'vuex'
import imagesLoaded from "imagesloaded"

import psychology from '@/psychology.json'
import {cover, archive} from '@/list.json'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    coverList: cover,
    archiveList: archive,
    psychologyLists: psychology,
    member: '',
    isLoader: false
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
    changePage(state, name) {
      console.log('before = '+ state.isLoader)
      if(state.isLoader == false) {
        state.isLoader = !state.isLoader
      }
      console.log('after = '+ state.isLoader)
      state.member = name
    },
    loaded(state, current) {
      state.isLoader = current
      console.log('finished = '+ state.isLoader)
    }
  },
  actions: {
    loadedTarget(context, $target) {
      new imagesLoaded($target, () => {
        console.log("All loaded!!");
        context.commit("loaded", false)
      });
    }
  }
})

export default store;
