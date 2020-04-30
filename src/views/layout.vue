<template>
    <!--布局路由，所有页面都嵌入这个路由页面-->
    <div class="layout" :class="{'is-Mobile': isMobile}">
<!--        移动端菜单-->
        <mobile-menu v-if="isMobile"></mobile-menu>
        <el-row>
            <el-col :span="4" v-if="!isMobile">
                <my-menu></my-menu>
            </el-col>
            <el-col class="main-content" :span="isMobile ? 24 : 20">
                <router-view></router-view>    <!--单页面应用，所有的内容在这个节点切换-->
                <div class="info">
                    <a href="http://www.beian.miit.gov.cn/" target="_blank">备案号：粤ICP备19029899号</a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import myMenu from "../components/myMenu";
    import mobileMenu from "../components/mobileMenu";
    export default {
        name: "layout",
        data() {
            return {
            }
        },
		components: {myMenu,mobileMenu},
        methods: {

        },
        computed: {
			isMobile() {
				return this.$store.state.isMobile
            }
        }
    }
</script>

<style lang="scss">
    .layout {
        &.is-Mobile {
            .main-content {
                padding: 60px 10px 20px 10px;
            }
        }
        .main-content {
            padding: 20px;
        }
        .info{
            position: fixed;
            bottom:0;
            background-color: white;
            text-align: center;
            left: 0;
            right: 0;
        }
    }
</style>
