<template>
    <div class="my-list">
      <ul>
        <li class="list-group-item" :class="{'has-bg':isChange}" v-for="(item,index) in dataList" @click="clickFun(1)">
          <slot name="title" :item="item" :index="index">
            <div class="main-title" v-text="item.title"></div>
          </slot>
          <div class="content" v-text="item.content"></div>
          <i class="el-icon-delete" @click="$emit('deleteItem',index)"></i>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "my-list",
    //子组件接收父组件传过来的值
    props:{
      dataList:{
        type:[Array,Object],   // 类型校验，多个可能的类型
        require:true,         //是否必传
        default:function () { //默认值， 对象或数组默认值必须从一个工厂函数获取
          return []
        },
        // //自定义校验
        // validator: function (value) {
        //   // 这个值必须匹配下列字符串中的一个
        //   return ['success', 'warning', 'danger'].indexOf(value) !== -1
        // }
      },
      clickFun:{
        type: Function,
        require: false
      },
    },
    data: function () {
      return {
        isChange:false
      }
    },
    methods: {
      changeColor(){
        this.isChange = true
      }
    },
    mounted: function () {
    },
    computed: {},
    created: function () {
    }
  }
</script>

<style lang="scss">
    .my-list {
      .list-group-item{
        position: relative;
        display: block;
        padding: 10px 15px;
        margin-bottom: -1px;
        background-color: #fff;
        border: 1px solid #ddd;
        &.has-bg{
          background: darkcyan;
        }
        &:hover{
          background: antiquewhite;
        }
        .main-title{
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .content{
          font-size: 12px;
          color: #999;
          white-space: nowrap;
        }
        .el-icon-delete{
          float: right;
          position: relative;
          bottom: 12px;
          cursor: pointer;
        }
        &:first-child{
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        &:last-child{
          margin-bottom: 0;
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }
    }
</style>
