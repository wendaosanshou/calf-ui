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
    'no-restricted-globals': 'off',
    'quote-props': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'import/no-dynamic-require': 'off',
    'max-len': ["error", { "code": 150 }]
  }
};
