import {
  Button,
  captch,
  Popup,
  Dialog,
  Loading,
  Checkbox,
  Input,
  Notice,
  Progress,
  PullRefresh,
  Textarea,
  Toast,
  Switch
} from './module'

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  const components = [
    Button,
    captch,
    Popup,
    Dialog,
    Loading,
    Checkbox,
    Input,
    Notice,
    Progress,
    PullRefresh,
    Textarea,
    Toast,
    Switch
  ]
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
