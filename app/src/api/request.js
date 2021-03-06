//二次重写axios，增加拦截器
//引入axios
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//进入进度条样式
import 'nprogress/nprogress.css'
//引入仓库
import store from "@/store"

const requests =axios.create({
  baseURL: "/api",
  timeout: 5000,
});

requests.interceptors.request.use( (config)=> {
  // 在发送请求之前做些什么
  //进度条开始
  //游客登录给请求头添加一个字段
  if(store.state.detail.uuid_token){
    config.headers.userTempId=store.state.detail.uuid_token
  }
  //需要携带token给服务器
  if(store.state.user.token){
    config.headers.token=store.state.user.token
  }
  nprogress.start()
  return config;
})

// 添加响应拦截器
requests.interceptors.response.use( (response) =>{
  // 对响应数据做点什么
  // 进度条结束
  nprogress.done()
  return response.data;
}, (error) =>{
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default requests