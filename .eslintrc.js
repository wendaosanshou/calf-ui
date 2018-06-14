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
    // 缩进使用4个空格， SwitchCase 一个
    indent: ['error', 4, { "SwitchCase": 1 }],
    // 使用单引号
    'quotes': [
      'error',
      'single'
    ],
    // 规定变量命名为驼峰
    "camelcase": [
      "warn",
      {
        "properties": "always"
      }
    ],
    'no-undef': 'off',
    // 要求在特定位置添加 jsdoc 注释
    'require-jsdoc': [
      'warn',
      {
        'require': {
          'FunctionDeclaration': true,
          'MethodDefinition': false,
          'ClassDeclaration': false,
          'ArrowFunctionExpression': false
        }
      }
    ]
  }
}