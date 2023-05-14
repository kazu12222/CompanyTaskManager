module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended', // 追加
    'prettier', // 追加
  ],
  plugins: [
    'prettier', // 追加
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        // 追加
        semi: false,
      },
    ],
  },
}
