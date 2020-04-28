<template>
  <!--下拉去重-->
  <div class="selectRepeat">
    <h5>选择款项，并填写费用</h5>
    <div class="select-list" v-for="(item,index) in selectItemList" :key="index">
      <el-select v-model="item.id" placeholder="选择款项">
        <el-option v-for="(val,key) in selectMap" v-show="isSelect(parseInt(key),item.id)" :value="parseInt(key)" :key="key" :label="val"></el-option>
      </el-select>
      <el-input placeholder="请输入费用" v-model="item.money" type="number" class="money"></el-input>
      <el-button type="info" icon="el-icon-circle-plus-outline" circle @click="add" v-show="selectData.length > selectItemList.length"></el-button>
      <el-button type="info" icon="el-icon-remove-outline" circle @click="reduce(index)" v-show="selectItemList.length > 1"></el-button>
    </div>
    <h5 class="total">{{`总费用：${total}元`}}</h5>
  </div>
</template>

<script>
  export default {
    name: "selectRepeat",
    data() {
      return {
        //最后选中的标记
        selectItemList:[],
        //后台给的数组
        selectData:[
          {id:12,name:'物业费'},
          {id:15,name:'卫生费'},
          {id:18,name:'材料费'},
          {id:22,name:'管理费'}
        ]
      }
    },
    methods: {
      reduce(index){
        this.selectItemList.splice(index,1)
      },
      add(){
        this.selectItemList.push({id:'',money:0})
      },
      isSelect(id,currentId){
        if(currentId === id){
          return true
        }
        for(let i in this.selectItemList){
          if(this.selectItemList[i].id === id){
            return false
          }
        }
        return true
      }
    },
    computed: {
      selectMap(){
        let map = {}
        this.selectData.forEach(row => {
          map[row.id] = row.name
        })
        return map
      },
      total(){
        let total = 0
        this.selectItemList.forEach(row => {
          if(row.id){
            total += parseInt(row.money) || 0
          }
        })
        return total
      }
    },
    created: function () {
      //初始化一个选项
      this.selectItemList = [{id:'',money:0}]
    }
  }
</script>

<style lang="scss">
  .selectRepeat {
    .select-list{
      .money{
        width: 200px;
      }
    }
    .el-select{
      margin-bottom: 20px;
    }
  }
</style>
