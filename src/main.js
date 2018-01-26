// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import axios from 'axios'
import Vuex from 'vuex'     //状态管理工具
import stores from './vuex/store'  //引入vuex的状态仓库
//兼容ie
import "babel-polyfill";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const baseConfig = require('./assets/util/baseConfig')

import constantsMap from './assets/util/constant'   //项目内使用到的常量
import vueUtil from './assets/util/vue-util'   //项目内使用到的常量

let baseURL = ''
if (process.env.NODE_ENV == 'development') {      //这里配置项目开发和上线后的baseURL
  baseURL = '/dev'
} else {
  baseURL = ''
}

axios.defaults.baseURL = baseURL
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if (config.method == 'post') {   //post请求进行添加分页参数
    if (!config.data) {
      config.data = {}
    }
    let params = {
      PageNo:baseConfig.pageNo,
      PageSize:baseConfig.pageSize
    }
    config.data  = $.extend(params, config.data);
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

Vue.prototype.$axios = axios;

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(constantsMap)
Vue.use(vueUtil)


Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:stores,
  template: '<App/>',
  components: {App}
})
