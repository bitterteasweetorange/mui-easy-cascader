module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'max-lines': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-empty': 'error',
    'default-case': 'error',
    eqeqeq: 'error',
    'no-return-assign': 'error',
    'no-useless-return': 'error',
    'max-depth': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
}
