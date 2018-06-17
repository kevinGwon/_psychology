import Vue from 'vue'
import Router from 'vue-router'
import Psychology from '@/components/Psychology'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/psychology'
    }, {
      path: '/psychology',
      name: 'psychology',
      component: Psychology
    }, {
      path: '/page',
      name: 'page',
      component: Page
    }
  ]
})
