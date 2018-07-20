import dialog from '../../components/dialog/dialog.vue'
import addDialog from './api'

dialog.install = function(Vue) {
  Vue.component(dialog.name, dialog)
  addDialog(Vue, dialog)
}

export default dialog
