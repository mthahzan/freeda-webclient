module.exports = {
  root: true,
  globals: {
    Promise: false,
    setTimeout: false,
    console: false,
    window: false,
    process: false,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  "extends": "google",
  // add your custom rules here
  'rules': {
    'no-undef': 'error',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'max-len': [
      "error",
      {
        'ignoreRegExpLiterals': true,
      }
    ],
  }
}
