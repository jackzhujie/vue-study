<template>
    <div id="app" v-loading.fullscreen.lock="isLoading">                   <!--所有的东西都挂载在id为app的节点下-->
      <router-view></router-view>
    </div>
</template>

<script>
    import {isMobile} from "./assets/util/common";

	export default {
        name: 'app',
        data() {
            return {

            }
        },
        computed:{
            isLoading: function () {
                return this.$store.state.isLoading
            }
        },
        methods: {

        },
        created: function () {
            // 判断是否是移动端
			this.$store.commit('setIsMobile', isMobile())
        }
    }
</script>
<style lang="scss">
    @import "assets/scss/reset.css";
    @import "assets/scss/common";
    @import "assets/scss/style.css";
    @import "assets/scss/display.css";
</style>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-smoothing: antialiased;
        color: #2c3e50;
        margin: 0 auto;
        max-width: 1920px;
        width: 100%;
    }
</style>
