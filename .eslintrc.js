module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    '@antfu/eslint-config-vue',
  ],
  plugins: [
    'markdown',
    'jest',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-new': 'off',
    'import/order': 'off',
  },
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
