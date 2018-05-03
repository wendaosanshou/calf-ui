import Button from '../pages/button.vue'
import Index from '../pages/index.vue'

const routes = [
  {
    path: '/button',
    component: Button
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
