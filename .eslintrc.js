module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};


// module.exports = {
//   root: true,
//   parserOptions: {
//     parser: 'babel-eslint',
//     sourceType: 'module'
//   },
//   env: {
//     browser: true,
//   },
//   // https://github.com/standard/standard/blob/master/docs/RULES-en.md
//   extends: [
//     'plugin:vue/essential',
//     '@vue/airbnb',
//     "eslint:recommended",
//     "plugin:prettier/recommended"
//   ],
//   // required to lint *.vue files
//   plugins: [
//     'html',
//     'standard',
//     'vue'
//   ],
//   // add your custom rules here
//   'rules': {
//     // allow paren-less arrow functions
//     'arrow-parens': 0,
//     // allow async-await
//     'generator-star-spacing': 0,
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
//     "function-call-argument-newline": ["error", "consistent"]
//   }
// }