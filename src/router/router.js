import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import layout from '@/views/layout'
import resume from '@/views/resume'
import testPage1 from '@/views/testPage1'
import createResume from "@/views/createResume"
import test from "@/views/test"

import {defaultMenu} from "./menuRouter";
import routeFile from "./menuRouter"

Vue.use(Router)

const router = new Router({
	// mode: 'history',     //这个模式下，地址栏就不会自己加上#号了
	routes: [
		{
			name: 'login',
			path: '/login',
			component: login,
		},
		{
			name: 'testPage1',
			path: '/testPage1',
			component: testPage1,
		},
		{
			path: '/resume',
			name: 'resume',
			component: resume
		},
		{
			path: '/createResume',
			name: 'createResume',
			component: createResume
		},
		{
			path: '/test',
			name: 'test',
			component: test
		}
	]
})

//利用vue-router2.2.0新增特性addRoutes实现路由动态加载，菜单动态加载，运用于后台管理系统，路由数据取自数据库
let arr = []
defaultMenu.forEach(item => {
	item.child.forEach(row => {
		//根据后台返回的url，这里加载对于的route
		routeFile.forEach(route => {
			if (row.url === route.path) {
				arr.push(route)
			}
		})
	})
})
const baseRoute = [
	{
		name: 'layout',
		path: '/',
		component: layout,
		children: arr
	}
]


router.addRoutes(baseRoute)

export default router
