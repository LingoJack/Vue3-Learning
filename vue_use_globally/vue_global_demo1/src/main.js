import './assets/main.css'

/*这里已经通过npm install把vue下载到本地了，在node_modules中的vue文件中，所以直接本地导入这么写*/
import { createApp } from 'vue'

import App from './App.vue'

/*从vue中引入createApp，挂载到index.html的id为app的组件上
* 其中，给createApp传递的参数App是从./App.vue导入的
* */
createApp(App).mount('#app')
