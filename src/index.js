import {
  Button,
  Captch,
  Popup,
  Dialog,
  Loading,
  ListPicker,
  CascadePicker,
  DatePicker,
  Notice,
  Picker,
  Progress,
  PullRefresh,
  Tab,
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
    Captch,
    Popup,
    Dialog,
    Loading,
    ListPicker,
    CascadePicker,
    DatePicker,
    Notice,
    Picker,
    Progress,
    PullRefresh,
    Tab,
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
