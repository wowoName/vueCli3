import axios from 'axios';
import qs from "qs";
import Vue from 'vue';
import router from '@/router';
//终止axios的fun
let axiosToken = null,
    vm = new Vue({
        data: {
            httpCount: 0
        }
    });
//请求超时时间
axios.defaults.timeout = 3000;
//添加token
axios.defaults.headers = {
    TOKEN: window.localStorage.getItem("liveToken"),
    'Content-Type': 'application/x-www-form-urlencoded'
};
// axios拦截器
axios.interceptors.request.use(config => {
        // 在发送请求之前做些什么
        return config;
    },
    err => {
        return Promise.reject(err);
    });
axios.interceptors.response.use(
    response => {
        //请求完成token置空
        axiosToken = null;
        if (response.data.info == "0")
            router.push("/home");
        else
            return response;
    },
    error => {
        //请求完成token置空
        axiosToken = null;
        //提示信息
        alert("请稍后再试...", 'center');
        return Promise.reject(error.response.data); // 返回接口返回的错误信息
    });

class HttpRequest {
    get(url, paramsData, successFun, errorFun = () => {}) {
        axios.get(url, qs.stringify(paramsData))
            .then(function(res) {
                successFun(res)
            })
            .catch(function(err) {
                //console.log("请求失败！ " + err)
                errorFun();
            })
    };
    // post请求
    post(url, paramsData, successFun, errorFun = () => {}) {
        axios.post(url, qs.stringify(paramsData), {
                //终止请求
                cancelToken: new axios.CancelToken(function executor(c) {
                    axiosToken = c;
                })
            })
            .then((res) => {
                successFun(res);
            })
            .catch((err) => {
                console.log(err);
                errorFun();
            })
    };
    //终止请求
    doCancelToken(msg = "异常") {
        if (axiosToken) axiosToken(msg);
    }
}
export default HttpRequest;