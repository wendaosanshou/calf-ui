import ListPicker from '../../components/list-picker/list-picker.vue'
import addListPicker from './api'

ListPicker.install = function (Vue) {
  Vue.component(ListPicker.name, ListPicker)
  addListPicker(Vue, ListPicker)
}

export default ListPicker
