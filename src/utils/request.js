import axios from 'axios';


// axios.get("http://localhost:8888/db.json").then(res =>{
//     console.log(res);
// })

// axios.get("/db.json").then(res => {
//     console.log(res);
// })

const request = axios.create({
    //设置公共路径
    // baseURL:'http://localhost:8888',
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000  //设置请求时间是否超时
});


//请求拦截器
request.interceptors.request.use(function (config){
    console.log("请求拦截")


    const token = localStorage.getItem("ht_token")?localStorage.getItem("ht_token"):"";
    config.headers.Authorization = token;
    return config;
},function (error){
    return Promise.reject(error);
});


request.interceptors.response.use(function (response) {
    console.log("相应拦截器")
    return response;
},function (error){
    return Promise.reject(error);
});


export default request;