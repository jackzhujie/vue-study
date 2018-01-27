import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',     //这个模式下，地址栏就不会自己加上#号了
  routes: []
})
