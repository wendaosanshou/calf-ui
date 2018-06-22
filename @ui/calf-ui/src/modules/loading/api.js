import createAPI from '../../common/helpers/create-api'

export default function addLoading(Vue, Loading) {
  createAPI(Vue, Loading, ['close'], true)
}
