<template>
  <div id="app" v-loading.fullscreen.lock="isLoading">                   <!--所有的东西都挂载在id为app的节点下-->
   <el-row :gutter="20">
     <el-col :span="4">
       <!--菜单-->
       <el-menu
         :default-active="activeIndex"
         @select="handleSelect"
         class="el-menu-vertical-demo">
         <el-submenu :index="index + ''" v-for="(item,index) in menuList" :key="index">
           <template slot="title">   <!--组件插值，slot意思是把下面的html插到组件里面对应的地方-->
             <i :class="item.css"></i>
             <span v-text="item.showName"></span>
           </template>
           <el-menu-item-group>
             <el-menu-item :index="index + '-' + subIndex" v-for="(subItem,subIndex) in item.child" :key="subIndex">
               <router-link :to="{path:subItem.url}" v-text="subItem.showName"></router-link>
             </el-menu-item>
           </el-menu-item-group>
         </el-submenu>
       </el-menu>
     </el-col>
     <el-col :span="20">
       <router-view></router-view>    <!--单页面应用，所有的内容在这个节点切换-->
     </el-col>
   </el-row>
  </div>
</template>

<script>
import test1 from '@/page/testPage1.vue'
import test2 from '@/page/testPage2.vue'
import vueBase from '@/page/vueBase.vue'
import componentStudy from '@/page/componentStudy.vue'
import vuedirective from '@/page/vueDirective.vue'
import pageTest from '@/page/pageComponentsTest.vue'
import mapToArrayTest from '@/page/mapToArrayTest.vue'
import selectRepeat from '@/page/selectRepeat.vue'
import serverTest from '@/page/serverTest.vue'
export default {
  name: 'app',
  data(){
    return {
      menuList:[],
      routeData:[
        {
          path: '/',
          name: 'test1',
          component: test1
        },
        {
          path: '/test2',
          name: 'test2',
          component: test2
        },
        {
          path: '/baseStudy',
          name: '基础学习',
          component: vueBase
        },
        {
          path: '/componentStudy',
          name: '组件教程',
          component: componentStudy
        },
        {
          path: '/vueDirective',
          name: '自定义指令教程',
          component: vuedirective
        },
        {
          path: '/pageTest',
          name: '分页组件测试',
          component: pageTest
        },
        {
          path: '/mapToArrayTest',
          name: 'map代替array避免遍历',
          component: mapToArrayTest
        },
        {
          path: '/selectRepeat',
          component: selectRepeat
        },
        {
          path: '/serverTest',
          component: serverTest
        },
      ]
    }
  },
  methods:{
    handleSelect:function (key, keyPath) {
      console.log(key, keyPath);
      this.$store.commit('setMenuPosition',keyPath[1])     //这里存在菜单位置
    },
    dealMenu(){
      //利用vue-router2.2.0新增特性addRoutes实现路由动态加载，菜单动态加载，运用于后台管理系统，路由数据取自数据库
      let arr = []
      this.menuList.forEach( item => {
        item.child.forEach( row => {
          //根据后台返回的url，这里加载对于的route
          this.routeData.forEach( route => {
            if(row.url == route.path){
              arr.push(route)
            }
          })
        })
      })
      console.log(arr)
      this.$router.addRoutes(arr)
    },
    getMenuRoute:function () {
      const defaultMenu = [
        {
          showName:"首页",css:"el-icon-star-off",child:[{showName:"测试1",url:"/"}]
        },{
          showName:"测试",css:"el-icon-circle-check-outline",child:[{showName:"node服务测试",url:"/serverTest"}]
        },{
          showName:"vue学习教程",css:"el-icon-edit-outline",child:[
            {showName:"基础教程",url:"/baseStudy"},
            {showName:"组件教程",url:"/componentStudy"},
            {showName:"自定义指令教程",url:"/vueDirective"},
            {showName:"分页组件",url:'/pageTest'}
          ]
        },
        {
          showName:'js技巧',css:'el-icon-circle-check-outline',child:[
            {showName:'map代替array避免遍历',url:'/mapToArrayTest'},
            {showName:'多个下拉去重',url:'/selectRepeat'}
          ]
        }
      ]
      this.menuList = defaultMenu
      this.dealMenu()
      // this.$get('list_user',{}, res => {   //自己实现的请求方法
      //   this.menuList = res    //菜单获取成功 ，菜意味着权限，通过权限来加载路由
      //   this.dealMenu()
      // },err =>{
      //   this.menuList = defaultMenu
      //   this.dealMenu()
      //   console.log(err)
      //   this.showAlert("服务器异常！","error")
      // })
    }
  },
  computed:{
    activeIndex:function () {              //从vuex获取数据
      return this.$store.state.menuPosition[0]
    },
    isLoading:function () {
      return this.$store.state.isLoading
    }
  },
  created:function () {
    this.getMenuRoute()
  }
}
</script>
<style lang="scss">
  @import "assets/scss/common";
  @import "assets/scss/style.css";
</style>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-smoothing: antialiased;
    color: #2c3e50;
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1200px;
  }
</style>
