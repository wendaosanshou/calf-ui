import captch from '../../components/captch/captch.vue'

captch.install = function(Vue) {
  Vue.component(captch.name, captch)
}

export default captch
