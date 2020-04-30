<!--菜单组件-->
<template>
    <!--菜单-->
    <el-menu :default-active="activeIndex" :unique-opened="true" @select="handleSelect" class="el-menu-vertical-demo">
        <el-submenu :index="index + ''" v-for="(item,index) in menuList" :key="index">
            <template slot="title">   <!--组件插值，slot意思是把下面的html插到组件里面对应的地方-->
                <i :class="item.css"></i> <span v-text="item.showName"></span>
            </template>
            <el-menu-item-group>
                <el-menu-item @click="toPath(subItem.url)" :index="index + '-' + subIndex" v-for="(subItem,subIndex) in item.child" :key="subIndex">
                    <span v-text="subItem.showName"></span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    import {defaultMenu} from "../router/menuRouter";
	export default {
        name: "myMenu",
        components: {},
        data() {
            return {
				menuList: defaultMenu,
            }
        },
        methods: {
			toPath(path) {
				this.$emit('jumpPage')
			    this.$router.push(path)
            },
			handleSelect: function (key, keyPath) {
				this.$store.commit('setMenuPosition', keyPath[1])     //这里存在菜单位置
			}
        },
        computed: {
            activeIndex: function () {              //从vuex获取数据
                return this.$store.state.menuPosition[0]
            }
        },
        created: function () {}
    }
</script>

<style lang="scss">
  .myMenu{
      .el-submenu .el-menu-item {
          a {
              height: 100%;
              display: inline-block;
              width: 100%;
          }
      }
  }
</style>
