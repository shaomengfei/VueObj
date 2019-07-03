import Vue from 'vue';
import axios from 'axios';
// Vue.use(axios);  axios不支持use安装

import store from "./store.js"
import { VIEW_LOADING } from '../store/types'

//拦截器
//请求时
axios.interceptors.request.use(function (config) {
  // 请求之前，做点事
  // config.headers={"Content-Type":"xxxxx"}  添加请求头
  // console.log('显示loading')
  store.dispatch(VIEW_LOADING,true)	//显示loading
  return config;
}, function (error) {
  // 错误请求，做点事
  return Promise.reject(error);
});

// 响应式，数据返回时
axios.interceptors.response.use(function (response) {
  // console.log('loading消失')
  store.dispatch(VIEW_LOADING,false)//消失loading
  return response;
}, function (error) {
  
  return Promise.reject(error);
});






Vue.prototype.$axios = axios;// 组件里面: this.$axios;
window.axios = axios; //组件，非组件里面都可以  axios()

export default axios;