import createAPI from '../../common/helpers/create-api'

export default function addCascadePicker(Vue, CascadePicker) {
  createAPI(Vue, CascadePicker, ['select', 'cancel', 'change'])
}
