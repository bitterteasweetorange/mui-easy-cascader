module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'react'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-empty': 'warn',
    'default-case': 'warn',
    eqeqeq: 'error',
    'no-return-assign': 'error',
    'no-useless-return': 'warn',
    'max-depth': 'warn',
  },
}
