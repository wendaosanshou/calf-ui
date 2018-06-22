import Loading from '../../components/loading/loading.vue'
import addLoading from './api'

Loading.install = function(Vue) {
  Vue.component(Loading.name, Loading)
  addLoading(Vue, Loading)
}

export default Loading
