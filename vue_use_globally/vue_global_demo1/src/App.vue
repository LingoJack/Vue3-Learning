<!--  script控制模板的数据以及行为   -->
<!--<script>
  /*由前面的链条index.html => main.js => App.vue得知，main.js导入了App.vue导出的App，作为createApp的参数
  * 所以App.vue的作用就是导出export一个App
  * 这是第一种写法: 选项式API
  * */
  export default {
    data(){
      return {
        msg: '上海'
      }
    }
  }
</script>-->

<!--
       这是script的第二种写法，这种写法必须在script中写上setup标识
       这种写法称为：组合式API
-->
<script setup>
import {onMounted, ref} from "vue";

  //调用ref函数，定义响应式数据,相当于第一种写法的App里的data中的msg: '西安'
  const msg=ref('西安')

  function changeCity(){
    //在函数中访问ref函数定义的变量值，需要用value字段
    msg.value='北京'
  }

  //这相当于选项式API写法中的Mounted
  onMounted(()=>{
    //声明钩子函数
    console.log('App.vue挂载成功')
  })

  //下面演示如何导入其他的Vue文件
  //导入Api.vue文件
  import CompositionAPI_Demo from "./CompositionAPI_Demo.vue";

</script>


<!--  模板部分，由此生成html  -->
<template>
  <h1>{{msg}}</h1>
  <button @click="changeCity">改变城市</button>
  <br>
  <!-- 使用刚才导入的Api.vue文件，可以这么写 -->
  <CompositionAPI_Demo/>
</template>


<!--  当前App.vue组件的css样式  -->
<style scoped>
  /*控制h1的样式*/
  h1 {
    color: #ec8b89;
  }

</style>
