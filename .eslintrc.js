module.exports = {
  "extends": "airbnb",
  rules: {
    'class-methods-use-this': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'react/no-array-index-key': 1
  },
  env: {
    jest: true,
    browser: true,
  }
};