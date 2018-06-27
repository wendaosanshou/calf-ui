module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'mocha': true,
    'es6':true,
    'node': true
  },
  'extends': 'standard',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2017
  },
  'rules': {
    'space-before-function-paren': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}