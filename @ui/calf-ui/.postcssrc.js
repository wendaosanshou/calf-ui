// https://github.com/michael-ciniawsky/postcss-load-config
const path = require('path')

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    precss: {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    'postcss-assets': {
      loadPaths: [path.join(process.cwd(), 'src/common/icon')],
      basePath: 'src',
      baseUrl: '/',
      // baseUrl:
      //   process.env.NODE_ENV === 'production'
      //     ? config.build.publicPath
      //     : config.dev.publicPath,
      cachebuster: true,
      relative: true
    }
  }
}
