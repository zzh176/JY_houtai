import request from "../utils/request"

export default {
    //获取会员列表接口
    getGuanList(){
        return request({
            url : "https://elm.cangdu.org/admin/all",
            method : "get",
            // params : {
            //     offset : 0,
            //     limit : 10,
            //     offset,
            //     limit
            // }
        })
    }
} 