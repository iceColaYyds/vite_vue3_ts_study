<script setup lang="ts">
import { onMounted } from 'vue';

console.log(import.meta.env.VITE_APP_BASE_URL);

onMounted(async () => {
  let res = await fetch('/api/roles/index.jsp')
  // let res = await fetch('http://kg.zhaodashen.cn/mt/admin/roles/index.jsp')
  console.log(res);

})
</script>

<template>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</template>

<style scoped>

</style>
