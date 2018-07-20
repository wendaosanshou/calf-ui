import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

// 移动端自适应，使用flexible方案
import './static/flexible/flexible_css'
import './static/flexible/flexible'

// 本地开发环境引入
import Calf from '../src/index'
Vue.use(Calf)

// 全局引入
// import 'calf-ui/style.css'
// import Calf from 'calf-ui'
// Vue.use(Calf)

// 去除300ms延迟
// FastClick.attach(document.body)

// 按需引入
// import 'calf-ui/style.css'
// import Button from 'calf-ui/button'
// import Captch from 'calf-ui/captch'
// import Popup from 'calf-ui/popup'
// import Dialog from 'calf-ui/dialog'
// import Loading from 'calf-ui/loading'
// import ListPicker from 'calf-ui/list-picker'
// import CascadePicker from 'calf-ui/cascade-picker'
// import DatePicker from 'calf-ui/date-picker'
// import Notice from 'calf-ui/notice'
// import Picker from 'calf-ui/picker'
// import Progress from 'calf-ui/progress'
// import PullRefresh from 'calf-ui/pull-refresh'
// import Tab from 'calf-ui/tab'
// import Textarea from 'calf-ui/textarea'
// import Toast from 'calf-ui/toast'
// import Switch from 'calf-ui/switch'

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
