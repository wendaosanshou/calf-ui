import { Button, Popup, Dialog, Loading, Checkbox, Input } from './module'

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  const components = [Button, Popup, Dialog, Loading, Checkbox, Input]
  components.forEach(Component => {
    Component.install(Vue)
  })
}

const calf = {
  /* eslint-disable no-undef */
  version: __VERSION__,
  install
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default calf
