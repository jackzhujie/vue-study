import Vue from 'vue'
import Router from 'vue-router'
import login from './page/login'
import layout from './page/layout'

Vue.use(Router)

export default new Router({
    // mode: 'history',     //这个模式下，地址栏就不会自己加上#号了
    routes: [
        {
            name: 'login',
            path: '/login',
            component: login
        },
        {
            name: 'layout',
            path:'/',
            component:layout
        }
    ]
})
