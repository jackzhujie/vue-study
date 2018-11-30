const baseConfig = require('./baseConfig')

const defaultErrorCallBack = err => {
  this.showAlert('error',err)
}

export default {
  install(Vue, options) {
    const defaultParams = {
      pageSize:baseConfig.pageSize,
      pageNo:baseConfig.pageNo
    }
    //patch请求
    Vue.prototype.$patch = function (url,parmas,successCallBack,errorCallBack) {
      if(!errorCallBack){
        errorCallBack = defaultErrorCallBack
      }
      this.$axios.patch(url,parmas).then( res => {
        successCallBack(res.data)
      }).catch( err => {
        errorCallBack(err)
      })
    }
    //delete请求
    Vue.prototype.$del = function (url,parmas,successCallBack,errorCallBack) {
      if(!errorCallBack){
        errorCallBack = defaultErrorCallBack
      }
      console.log(parmas,'params')
      this.$axios.delete(url,{data:parmas}).then( res => {
        successCallBack(res.data)
      }).catch( err => {
        errorCallBack(err)
      })
    }
    //put请求
    Vue.prototype.$put = function (url,parmas,successCallBack,errorCallBack) {
      if(!errorCallBack){
        errorCallBack = defaultErrorCallBack
      }
      this.$axios.put(url,parmas).then( res => {
        successCallBack(res.data)
      }).catch( err => {
        errorCallBack(err)
      })
    }
    //post请求
    Vue.prototype.$post = function (url,parmas,successCallBack,errorCallBack) {
      if(!errorCallBack){
        errorCallBack = defaultErrorCallBack
      }
      this.$axios.post(url,parmas).then( res => {
        successCallBack(res.data)
      }).catch( err => {
        errorCallBack(err)
      })
    }

    //get请求
    Vue.prototype.$get = function (url,parmas,successCallBack,errorCallBack) {
      if(!errorCallBack){
        errorCallBack = defaultErrorCallBack
      }
      this.$axios.get(url,parmas).then( res => {
        successCallBack(res.data)
      }).catch( err => {
        errorCallBack(err)
      })
    }
    Vue.prototype.getPageConfig = function (res,params) {
      let config = {}
      config.currentPage = params.PageNo
      config.total = res.data.total
      config.pageSize = baseConfig.pageSize
      return config
    }
    Vue.prototype.showAlert = function (type = 'success',content = '操作成功！') {
      this.$message({
        message: content,
        type: type
      });
    }
    Vue.prototype.getRandomColor =  function(){
      return '#'+('333333'+(Math.random()*0x15720922<<0).toString(16)).substr(-6);
    }
    Vue.prototype.getPageConfig = function(res,params) {
      return {
        pageNo:params.pageNo || 0,
        pageSize:params.pageSize || 10,
        total:res.data.total || 0
      }
    }
  }
}
