import axios from 'axios'
import qs from 'qs'
// import store from '@/store/index';
// import {
//     Message
// } from 'element-ui';

//设置请求地址
// axios.defaults.baseURL = lineUrl.BASE;
axios.defaults.timeout = 10000; //响应时间
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'; //配置请求头
axios.defaults.headers['Cache-Control'] = 'no-cache'; //禁止缓存

//在发送请求之前做处理
axios.interceptors.request.use(
    config => {
        //只有本系统接口需要添加token
        if (config.baseURL.indexOf(lineUrl.BASE) != -1 && store.state.token) {
            //POST传参序列化(添加请求拦截器)
            if (config.method === 'post') {
                config.data = qs.stringify(Object.assign(config.data, {
                    token: store.state.token
                }));
            } else {
                config.params = Object.assign(config.params ? config.params : {}, {
                    token: store.state.token
                })
            }
        } else { //非本系统接口
            if (config.method === 'post') {
                config.data = qs.stringify(config.data);
            } else {
                config.params = config.params ? config.params : {};
            }
        }
        return config;
    },
    error => {
        console.log('请求ERROR：', '传递参数错误！')
        return Promise.reject(error);
    }
);

//返回状态判断(添加响应拦截器)
let errorTotal = 0,
    tokenExpire = false,
    total403 = 0,
    total502 = 0;
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 403 token失效
                case 403:
                    if (total403 == 0) {
                        total403 = 1;
                        Message.error('token失效');
                    }
                    break;
                    // 404请求不存在
                case 404:
                    Message.error('网络请求地址不存在！');
                    break;
                    // 500
                case 500:
                    if (errorTotal == 0) {
                        errorTotal = 1;
                        Message.error('500内部服务器错误');
                    }
                    break;
                    // 502
                case 502:
                    if (total502 == 0) {
                        total502 = 1;
                        Message.error('502 Bad Gateway');
                    }
                    break;
                    // 其他错误，直接抛出错误提示
                default:
                    Message({
                        message: error.response.data.message,
                        duration: 1500,
                        type: 'warning'
                    });
            }
            return Promise.reject(error.response);
        }
    }
);

//token过期处理
// function tokenExpireShow(code) {
//     if (code == 207) {
//         if (tokenExpire == false) {
//             tokenExpire = true;
//             Message.error('登录已过期，请重新登录');
//             store.commit("del_token"); //清空token
//             store.commit("del_userInfo"); //清空用户信息
//         }
//         return;
//     }
// }

//返回一个Promise(发送post请求)
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(response => {
            // tokenExpireShow(response.data.code); //token过期
            resolve(response.data);
        }, err => {
            reject(err);
        }).catch((error) => {
            reject(error)
        })
    })
}


//返回一个Promise(发送get请求)
export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: param
        }).then(response => {
            // tokenExpireShow(response.data.code); //token过期
            resolve(response.data);
        }, err => {
            reject(err)
        }).catch((error) => {
            reject(error)
        })
    })
}

export default axios;