import Vue from 'vue'
import Router from 'vue-router'
import login from './page/login'

Vue.use(Router)

export default new Router({
  mode: 'history',     //这个模式下，地址栏就不会自己加上#号了
  routes: [{
    name:'login',
    path:'/login',
    component: login
  }]
})
