import axios from 'axios';
import { Loading } from 'element-ui';
const request = axios.create({
    //设置公共路径
    // baseURL:'http://120.53.31.103:84/api',
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000  //设置请求时间是否超时d 
});

const loading = {
  loadingInstance : null,
  open(){
    if(this.loadingInstance === null){
      this.loadingInstance = Loading.service({
        target : ".main",
        text : "玩命加载中，急个锤子！",
        background : "rgba(23,244,62,0.5)",
        spinner: "el-icon-loading",
        width:"100px"
      });
    }
  },
  close(){
    if(this.loadingInstance !== null){
      this.loadingInstance.close();
    }
    this.loadingInstance = null;
  }
} 

//请求拦截器
request.interceptors.request.use(function (config){
    console.log("请求拦截")

    loading.open();
    const token = localStorage.getItem("ht_token")?localStorage.getItem("ht_token"):"";
    config.headers.Authorization = token;
    return config;
},function (error){
    loading.close();
    return Promise.reject(error);
});

//相应拦截器
request.interceptors.response.use(function (response) {
    console.log("相应拦截器")
    //关闭loading加载
    loading.close();
    return response;
},function (error){
    //关闭loading加载
    loading.close();
    return Promise.reject(error);
});


export default request;