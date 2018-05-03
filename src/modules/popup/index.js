import Popup from '../../components/popup/popup.vue'

Popup.install = function(Vue) {
  console.log(Popup.name)
  Vue.component(Popup.name, Popup)
}

export default Popup
