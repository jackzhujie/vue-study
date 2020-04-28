<template>
  <div class="sell-cat">
    <el-row>
      <div class="seller-info">
        <div class="title">
          测试页面2
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "testPage",
    data() {
      return {
        form: {}
      }
    },
    methods: {},
    created: function () {

    }
  }
</script>

<style lang="scss">
  .sell-cat {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    .seller-info {
      margin: 40px 0;
      .title {
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: bold;
      }
      .content {
        font-weight: 400;
        font-style: normal;
        font-size: 13px;
        color: #333333;
      }
    }
  }
</style>
