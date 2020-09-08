import request from "../utils/request"

export default {
    //获取会员列表接口
    getShangList(){
        return request({
            url : "https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20",
            method : "get"
        })
    }
} 