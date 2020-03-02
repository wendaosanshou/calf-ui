import createAPI from '../../common/helpers/create-api'

export default function addCaptch(Vue, Captch) {
  createAPI(
    Vue,
    Captch,
    ['cancel', 'change', 'confirm', 'success', 'fail', 'repeat'],
    true
  )
}
