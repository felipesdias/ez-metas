module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: false
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'Camera': true
  },
  // add your custom rules here
  'rules': {
    'no-param-reassign': 0,

    'import/first': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,

    'linebreak-style': 0,
    'one-var': 0,
    'prefer-destructuring': 0,
    'one-var-declaration-per-line': 0,
    'no-bitwise': 0,
    'func-names': 0,
    'arrow-parens': ['error', 'as-needed'],
    'quotes': [2, 'single'],
    'comma-dangle': ['error', 'never'],
    'curly': ['error', 'multi'],
    'no-prototype-builtins': 0,
    'function-paren-newline': ['error', 'consistent'],
    'max-len': ['error', { 'code': 300, 'ignoreComments': true }],
    'camelcase': 0,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
