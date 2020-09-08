import request from "../utils/request"

export default {
    //获取会员列表接口
    getSupplierList(){
        return request({
            url : "http://mengxuegu.com:9999/pro-api/supplier/list/search/1/10",
            method : "post"
        })
    }
} 