import request from "../utils/request"

export default {
    //获取会员列表接口
    getShiList(){
        return request({
            url : "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined",
            method : "get"
        })
    }
} 