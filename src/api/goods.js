import request from "../utils/request"

export default {
    //获取会员列表接口
    getGoodsList(){
        return request({
            url : "http://mengxuegu.com:9999/pro-api/goods/list/search/1/10",
            method : "post"
        })
    }
} 