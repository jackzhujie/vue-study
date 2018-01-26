<template>
  <div id="app">                   <!--所有的东西都挂载在id为app的节点下-->
   <el-row>
     <el-col :span="4">
       <!--菜单-->
       <el-menu
         :default-active="activeIndex"
         @select="handleSelect"
         class="el-menu-vertical-demo">
         <el-submenu :index="index + ''" v-for="(item,index) in menuList" :key="index">
           <template slot="title">   <!--组件插值，slot意思是把下面的html插到组件里面对应的地方-->
             <i :class="item.css"></i>
             <router-link :to="{path:item.path}" v-text="item.showName"></router-link>
           </template>
           <el-menu-item-group>
             <el-menu-item :index="index + '-' + subIndex" v-for="(subItem,subIndex) in item.child" v-text="subItem.showName" :key="subIndex"></el-menu-item>
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


export default {
  name: 'app',
  data(){
    return {
      menuList:[]
    }
  },
  methods:{
    handleSelect:function (key, keyPath) {
      console.log(key, keyPath);
      this.$store.commit('setMenuPosition',keyPath[1])     //这里存在菜单位置
    }
  },
  computed:{
    activeIndex:function () {              //从vuex获取数据
      return this.$store.state.menuPosition
    }
  },
  created:function () {
    this.$axios.get('list_user',{}).then( res => {
      this.menuList = res.data
    })
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
