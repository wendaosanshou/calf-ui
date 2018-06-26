// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'

// 移动端自适应，使用flexible方案
import './static/flexible/flexible_css'
import './static/flexible/flexible'

// dev example
import Calf from '../src/index'
Vue.use(Calf)

// prod example
// import '../lib/style.css'
// import Calf from '../lib/index.js'
// Vue.use(Calf)

// 去除300ms延迟
FastClick.attach(document.body)

// 按需引入(推荐全局引入)
// import '../lib/style.css'
// import Button from '../lib/button'
// import Captch from '../lib/captch'
// import Popup from '../lib/popup'
// import Dialog from '../lib/dialog'
// import Loading from '../lib/loading'
// import ListPicker from '../lib/list-picker'
// import CascadePicker from '../lib/cascade-picker'
// import DatePicker from '../lib/date-picker'
// import Notice from '../lib/notice'
// import Picker from '../lib/picker'
// import Progress from '../lib/progress'
// import PullRefresh from '../lib/pull-refresh'
// import Tab from '../lib/tab'
// import Textarea from '../lib/textarea'
// import Toast from '../lib/toast'
// import Switch from '../lib/switch'

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
