import createAPI from '../../common/helpers/create-api'

export default function addDialog(Vue, Dialog) {
  createAPI(Vue, Dialog, ['confirm', 'cancel'], true)
}
