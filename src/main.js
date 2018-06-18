// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue();
// Vue.component('loading',{ template: '<div>Loading!</div>'})

/* eslint-disable no-new */

const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,

  // data: {
  //   loading: false
  // }
})

// router.beforeEach((to, from, next) => {
//   app.loading = true
//   next()
// })
// router.afterEach((to, from, next) => {
//   setTimeout(() => app.loading = false, 1500) // timeout for demo purposes
//   next()
// })
