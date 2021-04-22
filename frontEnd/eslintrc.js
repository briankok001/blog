/* eslint-disable */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "semi": "error",
    "semi-spacing": ["error", { "before": false, "after": true }],
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "quote-props": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": "off",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "indent": [
      "error",
      2
    ]
  }
};