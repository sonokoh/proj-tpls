// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    // FIXME
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/method-signature-style': 'warn'
  }
})