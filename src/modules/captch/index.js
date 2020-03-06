import captch from '../../components/captch/captch.vue'
import addCaptch from './api'

captch.install = function(Vue) {
  Vue.component(captch.name, captch)
  addCaptch(Vue, captch)
}

export default captch
