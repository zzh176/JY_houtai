import request from "../utils/request"

export default {
    //轮播接口
    //   getBanner(){
    //       return request({url:"/db.json"});
    //   },
    //   登录接口
    login(){
        return request({
            url:"user/login",
            method:"post",
            data:{
                username:"name",
                userpass:"pass"
            }})
    },
    getUserInfo(){
        return request({
            url:"user/info"
        })
    }
}