<template>
    <div id="app" v-loading.fullscreen.lock="isLoading">                   <!--所有的东西都挂载在id为app的节点下-->
        <router-view></router-view>
    </div>
</template>

<script>

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
        max-width: 1920px;
    }
</style>
