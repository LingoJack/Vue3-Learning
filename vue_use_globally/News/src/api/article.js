/**
 *这是一个接口函数的文件，需要把这里的接口方法暴露给外面的文件使用，以提高代码的复用性
 * 因此，function的前面还有export的修饰符
 */

//导入axios
import axios from "axios";

//从请求中引入instance实例，添加了拦截器
import request from "../../utils/request.js";

//这些写到拦截器里，即utils/request.js
// const baseURL='http://localhost:8080';
// const instance=axios.create({baseURL})

//获取所有文章数据的函数
export async function getAllArticleService()
{
    //这里是异步的，需要同步等待服务器响应的结果，async await

    return await request.get('/article/getAll');
}

//根据文章和发布状态搜索的函数
export async function searchService(conditions)
{
    //这里的搜索条件除了像以前一样在请求地址后面拼接请求参数，还可以采用这种方式
    //axios.get('http://localhost:8080/article/search',{params:{...searchConditions.value}})
    //这里的...表示结构的意思，即把searchConditions的value字段结构并作为请求参数
    //这里是分开文件调用了函数，这里axios又是异步的，而我们在原先的页面应该等到服务器返回了数据之后再继续执行渲染
    //所以这里要用async和await来等待同步
    //这里相对于axios.get('http://localhost:8080/article/getAll')
    //采用了另一种写法
    return await request.get('/article/search',{params:conditions});
}

