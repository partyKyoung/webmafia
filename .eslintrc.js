const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: ['react-app', 'airbnb'],
  settings: {
    'import/resolver': {
      node: { 'paths': ['./src'] }
    }
  },
  plugins: [
    'import'
  ],  
  rules: {
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-extraneous-dependencies': ["error", {"devDependencies": true}],
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'arrow-body-style': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'eol-last': 0,
    'global-require': 0,
    'comma-dangle': [
      'error',
      {
        'arrays': 'never',
        'objects': 'never'
      }
    ]
  },
  globals: {
    'window': true
  }
};