// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import axios from 'axios'
import Vuex from 'vuex'     //状态管理工具
import store from './vuex/store'  //引入vuex的状态仓库
import NProgress from 'nprogress'    //页面顶部加载条和样式
import 'nprogress/nprogress.css'


const commonUtil = require('./assets/util/common')

//兼容ie
import "babel-polyfill";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const baseConfig = require('./assets/util/baseConfig')

import constantsMap from './assets/util/constant'   //项目内使用到的常量
import vueUtil from './assets/util/vue-util'   //项目内使用到的常量

let baseURL = ''
console.log(process.env.NODE_ENV, 'env')
if (process.env.NODE_ENV === 'development') {      //这里配置项目开发和上线后的baseURL
  baseURL = 'http://127.0.0.1:3300/'
} else {
  baseURL = 'http://67.218.157.95:3300'
}

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)


// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: true })

axios.defaults.baseURL = baseURL
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  //请求之前获取cookie，查看是否登录
  // if(config.url.indexOf('/login') < 0 && !commonUtil.getCookie('login')){
  //   // Vue.showAlert('未登录，已经跳转到首页')
  //   router.push('/login')
  //   return
  // }
	store.commit('setShowLoading',true)
  if (config.method === 'post') {   //post请求进行添加分页参数
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
	store.commit('setShowLoading',false)
  // 对请求错误做些什么
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
	store.commit('setShowLoading',false)
  return response
},(err)=>{
	store.commit('setShowLoading',false)
  return Promise.reject(err)
});

//路由拦截
router.beforeEach((to, from, next) => {              //路由跳转时，添加进度条
  //处理页面位置
	if(to.fullPath === '/'){
		router.push('/baseStudy')
	}
  // if(to.name != 'login' && !commonUtil.getCookie('login')){
  //   // Vue.showAlert('未登录，已经调整到首页')
  //   router.push('/login')
  //   return
  // }
  NProgress.start();    //顶部进度条
  next()
});

router.afterEach(transition => {
  NProgress.done();
});



Vue.prototype.$axios = axios;

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(constantsMap)
Vue.use(vueUtil)


Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
