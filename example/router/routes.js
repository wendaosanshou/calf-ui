import Button from '../pages/button.vue'
import Checkbox from '../pages/checkbox.vue'
import Popup from '../pages/popup.vue'
import Dialog from '../pages/dialog.vue'
import Loading from '../pages/loading.vue'
import Input from '../pages/input.vue'
import Textarea from '../pages/textarea.vue'
import Switch from '../pages/switch.vue'
import Index from '../pages/index.vue'

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/popup',
    component: Popup
  },
  {
    path: '/dialog',
    component: Dialog
  },
  {
    path: '/loading',
    component: Loading
  },
  {
    path: '/checkbox',
    component: Checkbox
  },
  {
    path: '/input',
    component: Input
  },
  {
    path: '/textarea',
    component: Textarea
  },
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
