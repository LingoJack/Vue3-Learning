<script setup>
import {onMounted, ref} from "vue";
  const count=ref(0)
  function increment(){
    count.value++;
  }

  onMounted(()=>{
    console.log('Api.vue挂载完毕')
  })
</script>

<template>
  <button @click="increment">+1：{{count}}</button>
</template>

<style scoped lang="scss">

</style>