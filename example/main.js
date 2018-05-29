// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

// dev example
import Calf from '../src/index'

// prod example
// import '../lib/calf.min.css'
// import Calf from '../lib/calf.min.js'

/* eslint-disable no-unused-vars */
Vue.use(Calf)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  router,
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')
