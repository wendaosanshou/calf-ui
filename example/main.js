import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

// 移动端自适应，使用flexible方案
import './static/flexible/flexible_css'
import './static/flexible/flexible'

// node_modules全局引入
import 'calf-ui/lib/style.css'
import Calf from 'calf-ui/lib'
Vue.use(Calf)

// 本地全局引入
// import Calf from '../src/index'
// Vue.use(Calf)

// 按需引入
// import {
//   Button,
//   Captch,
//   Popup,
//   Dialog,
//   Loading,
//   ListPicker,
//   CascadePicker,
//   DatePicker,
//   Notice,
//   Picker,
//   Progress,
//   PullRefresh,
//   Tab,
//   Textarea,
//   Toast,
//   Switch
// } from 'calf-ui'


// Vue.use(Button)
// Vue.use(Captch)
// Vue.use(Popup)
// Vue.use(ListPicker)
// Vue.use(Progress)
// Vue.use(Textarea)
// Vue.use(Notice)
// Vue.use(Switch)
// Vue.use(PullRefresh)
// Vue.use(Tab)
// Vue.use(Loading)
// Vue.use(Toast)
// Vue.use(Picker)
// Vue.use(CascadePicker)
// Vue.use(DatePicker)
// Vue.use(Dialog)

/* eslint-disable no-unused-vars */
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  router,
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')
