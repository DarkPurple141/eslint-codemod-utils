module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./packages/*/tsconfig.json'],
  },
  ignorePatterns: ['dist', '*.js'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['codemod', '@typescript-eslint', 'prettier'],
  rules: {
    'codemod/jsx/update-prop-name': [
      'error',
      {
        source: '@atlaskit/button',
        specifier: 'default',
        oldProp: 'data-testid',
        newProp: 'testId',
      },
    ],
    'codemod/test-rule': 'error',
    'codemod/sort-imports': 'error',
    'no-console': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
      },
    },
  ],
}
