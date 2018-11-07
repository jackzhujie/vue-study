<template>
  <!--对象代替数组-->
  <div class="mapToArrayTest">
    <p>用Array实现：</p>
    <el-select v-model="selectId" @change="changeItem()">
      <el-option v-for="(item,index) in showList" :value="item.id" :key="index" :label="item.name"></el-option>
    </el-select>
    <p v-show="selectId">{{`当前选择：${showText}`}}</p>
    <p style="margin-top: 40px;">用map集合代替arrayList实现：</p>
    <el-select v-model="selectMapId">
      <el-option v-for="(val,key) in showMap" :value="key" :key="key" :label="val"></el-option>
    </el-select>
    <p v-show="selectMapId">{{`当前选择：${showMap[selectMapId]}`}}</p>
  </div>
</template>

<script>
  export default {
    name: "mapToArrayTest",
    data() {
      return {
        selectId:'',
        showText:'',
        selectMapId:'',
        showList: [
          {name: '西游记', id: 1},
          {name: '三国演义', id: 2},
          {name: '水浒传', id: 3},
          {name: '红楼梦', id: 4}
        ]
      }
    },
    methods: {
      changeItem(){
        for(let i in this.showList){
          if(this.showList[i].id == this.selectId){
            this.showText = this.showList[i].name
            break
          }
        }
      }
    },
    computed: {
      showMap(){
        let map = {}
        this.showList.forEach(row =>{
          map[row.id] = row.name
        })
        return map
      }
    },
    created: function () {
    }
  }
</script>

<style lang="scss">
  .mapToArrayTest {

  }
</style>
