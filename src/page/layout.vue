<template>
    <!--布局路由，所有页面都嵌入这个路由页面-->
    <div class="layout">
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
                            <el-menu-item :index="index + '-' + subIndex" v-for="(subItem,subIndex) in item.child"
                                          :key="subIndex">
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
    import {defaultMenu} from "../router/menuRouter"
    export default {
        name: "layout",
        data() {
            return {
                menuList: defaultMenu,
                routeData: []
            }
        },
        methods: {
            handleSelect: function (key, keyPath) {
                this.$store.commit('setMenuPosition', keyPath[1])     //这里存在菜单位置
            }
        },
        computed: {
            activeIndex: function () {              //从vuex获取数据
                return this.$store.state.menuPosition[0]
            }
        }
    }
</script>

<style lang="scss">
    .layout {
    }
</style>
