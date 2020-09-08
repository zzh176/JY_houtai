import request from "../utils/request"

export default {
    getUserList(offset,limit){
        return request({
            url:"https://elm.cangdu.org/v1/users/list",
            method : "get",
            params : {
                offset : 0,
                limit : 10,
                offset,
                limit
            }
        })
    },
    getCount(){
        return request({
            url : "https://elm.cangdu.org/v1/users/count",
            method : "get"
        })
    }
}