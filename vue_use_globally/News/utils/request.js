//定制请求的实例
//工程化导入axios  npm install axios
import axios from "axios";

const baseURL='http://localhost:8080';
const instance = axios.create({baseURL});

//添加响应拦截器,本身就是异步的
instance.interceptors.response.use(
    result=>{
        return result.data;
    },
    err=>{
        console.log('获取数据失败')
        return Promise.reject(err)
    }
)

export default instance

