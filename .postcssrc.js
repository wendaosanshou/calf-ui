// https://github.com/michael-ciniawsky/postcss-load-config
const path = require('path')

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    precss: {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      selectorBlackList: ['no-rem'],
      propList: [
        'width',
        'height',
        'font',
        'font-size',
        'line-height',
        'letter-spacing',
        'margin',
        'margin-top',
        'margin-left',
        'margin-right',
        'margint-bottom',
        'padding',
        'padding-top',
        'padding-left',
        'padding-right',
        'padding-bottom',
        'left',
        'right',
        'top',
        'bottom',
        'background',
        'min-height',
        'max-height',
        'min-width',
        'max-width'
      ]
    },
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {}
  }
}
