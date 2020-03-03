module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'precss': {},
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
    autoprefixer: {}
  }
}
