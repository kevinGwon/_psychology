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
    archiveLength: 3,
    
    isLoader: false,
    isArchive: false,
  },
  getters: {
    psychologyLists(state) {
      return state.psychologyLists
    },
    getInfo(state) {
      if(state.member == '') {
        window.location = '/psychology'
        return false
      }
      return state.psychologyLists[state.member]
    }
  },
  mutations: {
    changePage(state, name) {
      // console.log('before = '+ state.isLoader)
      state.isLoader = !state.isLoader
      // console.log('after = '+ state.isLoader)
      state.member = name
    },
    addImage(state, current) {
      state.isArchive = current

      // console.log(current)
    },
    loaded(state, current) {
      state.isLoader = current
    }
  },
  actions: {
    loaderTrigger(context) {
      new imagesLoaded(document.getElementsByClassName('app'), () => {
        // console.log("All loaded!!");
        if(context.state.isLoader) {
          console.log('[isLoader]'+context.state.isLoader)
          context.commit("loaded", false)
        }
        if(context.state.isArchive) {
          console.log('[isArchive]'+context.state.isArchive)
          context.state.archiveLength += 3
          context.commit("addImage", false)
        }
        // console.log('finished = '+ context.state.isLoader)
        // console.log('member = '+ context.state.member)
      });
    },
    scrollToMember(context) {
      setTimeout(()=>{
        window.scrollTo(0, document.getElementsByClassName('profile')[0].offsetTop)
      }, 10)
    }
  }
})

export default store;
