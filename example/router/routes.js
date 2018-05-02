import Button from '../pages/button.vue'

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '*',
    redirect: '/button'
  }
]

export default routes
