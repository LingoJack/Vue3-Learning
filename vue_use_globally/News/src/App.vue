<script setup>
  /*导入Article.vue文件*/
  import articleVue from './Article.vue'
  import {onMounted} from "vue";
  onMounted(()=>{
    console.log('App组件挂载完毕')
  })
</script>

<template>
  <!--  使用引入的ArticleVue组件  -->
  <article-vue/>
</template>

<style scoped>

</style>
