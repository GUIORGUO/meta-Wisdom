import axios from "../http/request"
//接口封装界面
//请求示例
//get
export const getUserInfo = (data) => {
    return axios({
        url: "/getUserInfo",
        method: "get",
        data,
        config: {
            headers: {
                
            },
            timeout: 10000
        }
    })
}
export const getLikeInfo = (data) => {
    return axios({
        url: "/getLikeInfo2",
        method: "get",
        data,
        config: {
            headers: {
                
            },
            timeout: 10000
        }
    })
}
//post
export const mokePost = (data) => {
    return axios({
        url: "/api/xxxx",
        method: "post",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}
//api封装，其他页面直接调用即可
export const getVideoInfo = (data) => {
    return axios({
        url: "/getVideoInfo1",
        method: "get",
        data,
        config: {
            headers: {
                
            },
            timeout: 10000
        }
    })
}
