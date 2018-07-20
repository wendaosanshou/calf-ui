import Button from '../pages/button.vue'
import captch from '../pages/captch.vue'
// import Checkbox from '../pages/checkbox.vue'
import Dialog from '../pages/dialog.vue'
import Loading from '../pages/loading.vue'
import Tab from '../pages/tab.vue'
import Toast from '../pages/toast.vue'
import Notice from '../pages/notice.vue'
import Picker from '../pages/picker.vue'
import Progress from '../pages/progress.vue'
import PullRefresh from '../pages/pull-refresh.vue'
// import Input from '../pages/input.vue'
// import Textarea from '../pages/textarea.vue'
import Switch from '../pages/switch.vue'
import Index from '../pages/index.vue'

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/captch',
    component: captch
  },
  {
    path: '/dialog',
    component: Dialog
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/notice',
    component: Notice
  },
  {
    path: '/picker',
    component: Picker
  },
  {
    path: '/progress',
    component: Progress
  },
  {
    path: '/tab',
    component: Tab
  },
  {
    path: '/pull-refresh',
    component: PullRefresh
  },
  {
    path: '/loading',
    component: Loading
  },
  // {
  //   path: '/checkbox',
  //   component: Checkbox
  // },
  // {
  //   path: '/input',
  //   component: Input
  // },
  // {
  //   path: '/textarea',
  //   component: Textarea
  // },
  {
    path: '/switch',
    component: Switch
  },
  {
    path: '/',
    component: Index
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
