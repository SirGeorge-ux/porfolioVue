module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'xo',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      extends: ['xo-typescript'],
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-empty-static-block': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-deugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
