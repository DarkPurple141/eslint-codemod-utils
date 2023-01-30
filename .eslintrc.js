module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./packages/*/tsconfig.eslint.json'],
  },
  ignorePatterns: ['dist', '*.js', 'vite*'],
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
    'codemod/sort-imports': 'error',
    'no-console': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
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
