<script setup>
/* 引入编辑和删除的图标 */
import {
  Delete,
  Edit
} from '@element-plus/icons-vue'

import {ref} from 'vue'
import {reactive} from 'vue'

const tableData = ref([
  {
    title: '标题1',
    category: '时事',
    time: '2004-8-7',
    status: '已发布'
  },
  {
    title: '标题1',
    category: '时事',
    time: '2004-8-7',
    status: '已发布'
  },
  {
    title: '标题1',
    category: '时事',
    time: '2004-8-7',
    status: '已发布'
  },
  {
    title: '标题1',
    category: '时事',
    time: '2004-8-7',
    status: '已发布'
  }
])
const currentPage = ref(1)
const pageSize = ref(5)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const total = ref(20)

/*处理调整页面大小的逻辑*/
const handleSizeChange = (number) => {

}

/*处理页面跳转的逻辑*/
const handleCurrentChange = (number) => {

}

/*接收表单的数据*/
const formInline = reactive({
  category: '',
  status: ''
})

/*处理表单提交的逻辑*/
const onSubmit = () => {

}
/*处理搜索框重置的逻辑*/
const onClear = () => {
  formInline.category = ''
  formInline.status = ''
}


</script>

<template>
  <!-- 卡片 -->
  <el-card class="box-card">
    <div class="card-header">
      <span>文章管理</span>
      <el-button type="primary" style="justify-content: flex-end">发布文章</el-button>
    </div>

    <!--  横杠分割   -->
    <div style="margin-top: 30px">
      <hr/>
    </div>

    <!-- 表单 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="文章分类">
        <el-input v-model="formInline.category" placeholder="请输入" clearable/>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select v-model="formInline.status" placeholder="请选择" clearable>
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="待发布" value="待发布"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit" round type="primary">搜索</el-button>
        <el-button round @click="onClear" type="warning">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="文章标题"></el-table-column>
      <el-table-column prop="category" label="分类"></el-table-column>
      <el-table-column prop="time" label="发表时间"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="operation" label="操作">
        <el-button type="primary" :icon="Edit" circle/>
        <el-button type="danger" :icon="Delete" circle/>
      </el-table-column>
    </el-table>

    <!-- 分页条  -->
    <el-pagination
        class="pagination"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[5, 10, 15, 20]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="jumper,total, sizes, prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<!--  scoped表示：仅在当前页面生效   -->
<style scoped>
.pagination {
  /*margin-top表示跟顶部留开距离*/
  margin-top: 20px;
  display: flex;
  /*居中*/
  justify-content: center;
}

/*定义卡片头的样式，.ClassName*/
.card-header {
  display: flex;
  justify-content: space-between;
}
</style>