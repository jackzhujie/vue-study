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
            {showName:"各种排序测试",url:'/sortTest'}
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
        path: '*',
        name: 'test1',
        component: () => {
            return import('@/page/componentStudy')
        }
    },
    {
        path: '/test2',
        name: 'test2',
        component: () => {
            return import('@/page/testPage2')
        }
    },
    {
        path: '/baseStudy',
        name: '基础学习',
        component: () => {
            return import('@/page/baseStudy')
        }
    },
    {
        path: '/componentStudy',
        name: '组件教程',
        component:() => {
            return import('@/page/componentStudy')
        }
    },
    {
        path: '/vueDirective',
        name: '自定义指令教程',
        component: () => {
            return import('@/page/vuedirective')
        }
    },
    {
        path: '/pageTest',
        name: '分页组件测试',
        component: () => {
            return import('@/page/pageComponentsTest')
        }
    },
    {
        path: '/mapToArrayTest',
        name: 'map代替array避免遍历',
        component: () => {
            return import('@/page/mapToArrayTest')
        }
    },
    {
        path: '/selectRepeat',
        component: () => {
            return import('@/page/selectRepeat')
        }
    },
    {
        path: '/serverTest',
        component:() =>  {
            return import('@/page/serverTest')
        }
    },
    {
        path: "/recursiveList",
        component:() => {
            return import('@/page/recursiveList')
        }
    }, {
        path: "/es6Test",
        component: () => {
            return import('@/page/es6Test')
        }
    }, {
        path: "/sortTest",
        component: () => {
            return import('@/page/sortTest.vue')
        }
    }
]

export default routeFile
