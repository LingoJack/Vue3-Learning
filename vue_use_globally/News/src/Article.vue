<!--  在这里定义单文件组件  -->

<script setup>
  import {onMounted, ref} from "vue";

  //从集中放置的API方法中引入
  import {getAllArticleService,searchService} from './api/article.js'



  const articleList=ref([]);

  async function getAllArticle(){
    articleList.value=await getAllArticleService();
  }

  //组合式API定义Mounted函数
  onMounted(()=>{
    console.log('article组件挂载完成，开始加载数据...')
    //发送异步请求，获取所有文章数据
    getAllArticle();
  })

  const searchConditions=ref({
    category: '',
    state: ''
  })

  async function search(){
    console.log(searchConditions.value)
    articleList.value=await searchService(searchConditions.value)
  }

  function clear(){
    searchConditions.value.category=''
    searchConditions.value.state=''
  }



</script>

<template>
  <!--  html元素  -->
  <div id="app">
    <!-- 搜索框 -->
    文章分类：<input type="text" v-model="searchConditions.category"/>
    &nbsp;&nbsp;
    发布状态：<input type="text" v-model="searchConditions.state"/>
    <br/>

    你输入的分类:<span>{{searchConditions.category}}</span>
    &nbsp;&nbsp;
    你输入的发布状态:<span>{{searchConditions.state}}</span>
    <br/>
    <br/>

    <button @click="search">搜索</button>
    <!-- 空格 -->
    &nbsp
    <button @click="clear">清空</button>
    <br/>
    <br/>

    <!-- 表格 -->
    <table border="1 solid" colspa="0" cellspacing="0" v-for="(article,index) in articleList">
      <tr>
        <!-- 表格行th，table head -->
        <th>文章标题</th>
        <th>分类</th>
        <th>发表时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      <tr>
        <!-- 表格单元td， -->
        <td>{{article.title}}</td>
        <td>{{article.category}}</td>
        <td>{{article.time}}</td>
        <td>{{article.state}}</td>
        <td>
          <button>编辑</button>
          <button>删除</button>
        </td>
      </tr>
    </table>
  </div>

</template>

<style scoped lang="scss">

</style>