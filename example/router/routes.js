import Button from '../pages/button.vue'
import Popup from '../pages/popup.vue'
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
    path: '/',
    component: Index
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
