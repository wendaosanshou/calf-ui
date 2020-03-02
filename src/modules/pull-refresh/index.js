import PullRefresh from '../../components/pull-refresh/pull-refresh.vue'

PullRefresh.install = function(Vue) {
  Vue.component(PullRefresh.name, PullRefresh)
}

export default PullRefresh
