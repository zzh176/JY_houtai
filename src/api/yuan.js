import request from "../utils/request"

export default {
    //获取会员列表接口
    getYuanList(){
        return request({
            url : "http://mengxuegu.com:9999/pro-api/staff/list/search",
            method : "post"
        })
    }
} 