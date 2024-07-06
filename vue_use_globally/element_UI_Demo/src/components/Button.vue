<script setup>
  import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
  } from '@element-plus/icons-vue'
</script>

<template>
  <!-- 这里是ElementUI的四个按钮 -->
  <div>
    <el-button round>确定</el-button>
    <el-button type="primary" round>确定</el-button>
    <el-button type="success" round >确定</el-button>
    <el-button type="info" round>确定</el-button>
    <el-button type="warning" round disabled="true">确定</el-button>
    <el-button type="danger" round>确定</el-button>
  </div>
</template>

<style scoped lang="scss">

</style>