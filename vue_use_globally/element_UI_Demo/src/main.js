//导入vue
import { createApp } from 'vue'
//导入app.vue
import App from './App.vue'
//本地导入element-plus npm install element-plus --save
import ElementPlus from 'element-plus'
//导入element-plus的样式
import 'element-plus/dist/index.css'
//导入Element-Plus组件的中文包：即渲染出来的组件的信息用中文提示
import locale from 'element-plus/dist/locale/zh-cn.js'

//创建应用实例
const app=createApp(App)

//使用Element-Plus
app.use(ElementPlus,{locale})

//选定控制的 HTML元素
app.mount('#app')
