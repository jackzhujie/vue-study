<template>
    <div class="login">
      <el-button @click="login">点击登录</el-button>
    </div>
</template>

<script>
  const commonUtil = require('../assets/util/common')
  export default {
    name: "login",
    data(){
        return {}
    },
    methods:{
      login(){
        commonUtil.setCookie("login","zhujie")
        this.$router.push("/")
      }
    }
  }
</script>

<style scoped>

</style>
