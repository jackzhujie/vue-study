// 一级菜单，路由文件
export const defaultMenu = [
	{
		showName: "vue学习教程", css: "el-icon-edit-outline", child: [
			{showName: "基础教程", url: "/baseStudy"},
			{showName: "组件教程", url: "/componentStudy"},
			{showName: "自定义指令教程", url: "/vueDirective"},
			{showName: "分页组件", url: '/pageTest'}
		]
	},
	{
		showName: 'js技巧', css: 'el-icon-circle-check-outline', child: [
			{showName: 'map代替array避免遍历', url: '/mapToArrayTest'},
			{showName: '多个下拉去重', url: '/selectRepeat'},
			{showName: "递归遍历", url: '/recursiveList'},
			{showName: "ES6学习", url: '/es6Test'},
			{showName: "各种排序测试", url: '/sortTest'},
			{showName: "reduce函数用法", url: '/reduceUse'},
			{showName: "前端算法集合", url: '/questionList'},
			{showName: "js异步代码示例", url: '/asyncTest'}
		]
	},
	{
		showName: 'css技巧', css: '', child: [
			{showName: 'css文字超出省虐号', url: '/ellipsisExceed'},
			{showName: 'css雪碧图', url: '/cssSprites'},
			{showName: 'css动画实现', url: '/animateTest'},
		]
	},
	{
		showName: "node服务测试",
		css: "el-icon-circle-check-outline",
		child: [{showName: "增删改查", url: "/serverTest"}]
	},
]

//路由文件
const routeFile = [
	{
		path: '/test2',
		name: 'test2',
		component: () => {
			return import('@/views/testPage2')
		}
	},
	{
		path: '/baseStudy',
		name: '基础学习',
		component: () => {
			return import('@/views/baseStudy')
		}
	},
	{
		path: '/componentStudy',
		name: '组件教程',
		component: () => {
			return import('@/views/componentStudy')
		}
	},
	{
		path: '/vueDirective',
		name: '自定义指令教程',
		component: () => {
			return import('@/views/vueDirective')
		}
	},
	{
		path: '/pageTest',
		name: '分页组件测试',
		component: () => {
			return import('@/views/pageComponentsTest')
		}
	},
	{
		path: '/mapToArrayTest',
		name: 'map代替array避免遍历',
		component: () => {
			return import('@/views/mapToArrayTest')
		}
	},
	{
		path: '/selectRepeat',
		component: () => {
			return import('@/views/selectRepeat')
		}
	},
	{
		path: '/serverTest',
		component: () => {
			return import('@/views/serverTest')
		}
	},
	{
		path: "/recursiveList",
		component: () => {
			return import('@/views/recursiveList')
		}
	}, {
		path: "/es6Test",
		component: () => {
			return import('@/views/es6Test')
		}
	}, {
		path: "/sortTest",
		component: () => {
			return import('@/views/sortTest.vue')
		}
	},
	{
		path: '/questionList',
		component: () => {
			return import('@/views/questionList.vue')
		}
	},
	{
		path: '/ellipsisExceed',
		component: () => {
			return import('@/views/ellipsisExceed')
		}
	},
	{
		path: '/reduceUse',
		component: () => {
			return import('@/views/reduceUse')
		}
	},
	{
		path: '/cssSprites',
		component: () => {
			return import('@/views/cssSprites')
		}
	},
	{
		path: '/asyncTest',
		component: () => {
			return import('@/views/asyncTest')
		}
	},
	{
		path: '/animateTest',
		component: () => {
			return import('@/views/animateTest')
		}
	},
]

export default routeFile
