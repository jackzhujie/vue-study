<template>
    <div class="componentStudy">
      <div class="my-content">
        <div>新闻列表</div>
        <my-list :data-list="dataList" ref="myList" :click-fun="clickFunction" @deleteItem="removeItem">
          <template slot="title" slot-scope="{item,index}">
            <div>
              <span v-text="'插槽：标题'" style="font-weight: bold"></span>
              <span v-text="item.title"></span>
            </div>
          </template>
        </my-list>
        <el-button @click="changeTheme" style="margin-top: 20px;">切换主题</el-button>
      </div>
      <my-list :data-list="dataList" ref="myList1"></my-list>
    </div>
</template>

<script>
  import myList from '../components/my-list'
  //全局引入
  // Vue.component('my-list',myList)
  export default {
    name: "componentStudy",
    data: function () {
        return {
          dataList:[
            {title:'标题1',content:'内容一'},
            {title:'标题2',content:'内容二'},
            {title:'标题3',content:'内容三'},
          ]
        }
    },
    methods: {
      changeTheme(){
        this.$refs.myList.changeColor()
      },
      clickFunction(item){
        console.log(item)
      },
      removeItem(index){
        this.dataList.splice(index,1)
      }
    },
    //局部引入，写法很灵活
    components:{myList},
    mounted: function () {
    },

    computed: {},
    created: function () {
    }
  }
</script>

<style lang="scss">
    .componentStudy {
      .my-content{
        max-width: 400px;
        margin: 0 auto;
      }
    }
</style>
