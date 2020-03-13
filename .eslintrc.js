module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'linebreak-style': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'no-console': 'off',
    'no-restricted-globals': ["history"],
    'quote-props': 'off'
  }
};
