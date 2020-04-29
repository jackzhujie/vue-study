<!--动画测试-->
<template>
  <div class="animateTest">
      <h1>2020年4月29日动画测试</h1>
      <h5 class="title">transition</h5>
      <div class="base base1"></div>
      <h5 class="title">transition配合transform一起使用</h5>
      <div class="base base2"></div>
      <h5 class="title">animate自定义动画</h5>
      <div class="base base3"></div>
  </div>
</template>

<script>
    export default {
        name: "animateTest",
        components: {},
        data() {
            return {}
        },
        methods: {

        },
        computed: {},
        created: function () {}
    }
</script>

<style lang="scss" scoped>
  .animateTest{
      .title {
          margin-top: 50px;
          position: relative;
      }
        .base {
            width: 100px;
            height: 100px;
            display: inline-block;
            background-color: #0EA9FF;
            border-width: 5px;
            border-style: solid;
            border-color: #5daf34;
            transition-property: width,height,background-color,border-width;
            transition-duration: 2s;
            transition-timing-function: ease-in;
            transition-delay: 500ms;
            /*简写*/
            /*transition: all 2s ease-in 500ms;*/
        }
      .base1:hover {
          width: 200px;
          height: 200px;
          background-color: #5daf34;
          border-width: 10px;
          border-color: #3a8ee6;
      }
      .base2{
          transform:none;
          transition-property: transform;
          &:hover {
              transform:scale(0.8, 1.5) rotate(35deg) skew(5deg) translate(15px, 25px);
          }
      }

      .base3 {
          border-radius: 50%;
          transform:none;
          position: relative;
          width: 100px;
          height: 100px;
          background: linear-gradient(
                  35deg,
                  #ccffff,
                  #ffcccc
          );
          &:hover {
              animation-name: bounce;
              animation-duration: 3s;
              animation-iteration-count: infinite;
          }
      }
      @keyframes bounce{
          0% {
              top: 0px;
          }
          50% {
              top: 249px;
              width: 130px;
              height: 70px;
          }
          100% {
              top: 0px;
          }
      }
  }
</style>
