<template>
  <!--nodeServer测试-->
  <div class="serverTest">
    <h4>用列表</h4>
    <el-button>新增</el-button>
    <el-table
      :data="userList"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="user_name"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="login_name"
        label="登录名">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-component :page-config="pageConfig" @changeCurrentPage="changeCurrentPage"></page-component>
  </div>
</template>

<script>
  import pageComponent from "../components/pageComponent"
  export default {
    name: "serverTest",
    data() {
      return {
        userList:[],
        pageConfig:{
          pageNo:1,
          pageSize:10
        }
      }
    },
    components:{'page-component':pageComponent},
    methods: {
      changeCurrentPage(page){
        this.pageConfig.pageNo = page
        this.getUserList()
      },
      getUserList(){
        this.$get('/users/list',this.pageConfig,res=>{
          console.log(res)
          if(res.success){
            this.userList = res.data.data
            this.pageConfig = this.getPageConfig(res,this.pageConfig)
          }
        })
      }
    },
    computed: {},
    created: function () {
      this.getUserList()
    }
  }
</script>

<style lang="scss">
  .serverTest {
  }
</style>
