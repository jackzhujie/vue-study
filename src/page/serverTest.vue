<template>
  <!--nodeServer测试-->
  <div class="serverTest">
    <h4>用户列表</h4>
    <el-button @click="showDialog()" size="small">新增</el-button>
    <el-table
      :data="userList"
      style="width: 100%">
      <el-table-column prop="id" label="id" width="180">
      </el-table-column>
      <el-table-column prop="userName" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="loginName" label="登录名">
      </el-table-column>
      <el-table-column prop="phone" label="电话">
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="delData(scope.row)">删除</el-button>
          <el-button type="text" size="small" @click="showDialog(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--新增编辑的弹框-->
    <el-dialog
      title="操作"
      :visible.sync="operateDialog"
      width="30%">
      <span class="body">
        <el-form :model="userModel" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="userModel.userName"></el-input>
          </el-form-item>
          <el-form-item label="登录名">
            <el-input v-model="userModel.loginName"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="userModel.phone"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="operateDialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmOperate">确 定</el-button>
      </span>
    </el-dialog>
    <page-component :page-config="pageConfig" @changeCurrentPage="changeCurrentPage"></page-component>
  </div>
</template>

<script>
  import pageComponent from "../components/pageComponent"
  export default {
    name: "serverTest",
    data() {
      return {
        userList: [],
        operateDialog: false,
        userModel:{},
        operateType:'add',
        pageConfig: {
          pageNo: 1,
          pageSize: 10
        }
      }
    },
    components: {'page-component': pageComponent},
    methods: {
      //delete
      delData(row){
        console.log(row)
        this.$confirm('此操作将永久删除该用户？, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$del('/users/del',{id:row.id},res=>{
            if(res.success){
              this.getUserList()
              this.showAlert()
            }else {
              this.showAlert('error',res.message)
            }
          })
        });
      },
      showDialog(row){
        if(row){
          this.operateType = 'edit'
          this.userModel = Object.assign(row,{})
        }else {
          this.operateType = 'add'
          this.userModel = {}
        }
        this.operateDialog = true
      },
      confirmOperate() {
        const successCallBack = res =>{
          if (res.success) {
            this.showAlert()
            this.getUserList()
          }else {
            this.showAlert('error',res.message)
          }
          this.operateDialog = false
        }
        if(this.operateType == 'add'){
          this.$post('/users/add',this.userModel,successCallBack)
        }else {
          this.$put('/users/update',this.userModel,successCallBack)
        }
      },
      changeCurrentPage(page) {
        this.pageConfig.pageNo = page
        this.getUserList()
      },
      getUserList() {
        this.$get('/users/list', this.pageConfig, res => {
          if (res.success) {
            this.userList = res.data.data
            this.pageConfig = this.getPageConfig(res, this.pageConfig)
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
