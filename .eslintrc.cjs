module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 新增，必须放在最后面
    'plugin:prettier/recommended'
  ],
  // parser用来解析.vue后缀文件，使得eslint能解析<template>标签中的内容
  parser: 'vue-eslint-parser',
  // parserOptions中的parser，即@typescript-eslint/parser用来解析vue文件中<script>标签中的代码。
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {}
}
