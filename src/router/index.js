import Vue from 'vue'
import Router from 'vue-router'
import Seunggon from '@/components/page/Seunggon'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  {
    path: '/Seunggon',
    name: 'Seunggon',
    component: Seunggon
  }
  ]
})
