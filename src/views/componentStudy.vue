<template>
    <div class="componentStudy">
      <div class="my-content">
        <div>新闻列表</div>
        <my-list :data-list="dataList" ref="myList" :click-fun="clickFunction" @deleteItem="removeItem">
          <template slot="title" slot-scope="{item,index}">
            <div>
              <span v-text="`${index + 1}.`" style="font-weight: bold"></span>
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
            {title:'携手打造更加紧密的中非命运共同体',content:'9月3日，2018年中非合作论...'},
            {title:'“小眼镜”牵动大情怀',content:'近日，习近平总书记就青少年视力健...'},
            {title:'倡议五周年之际',content:'2013年9月7日，国家主席习...'},
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
