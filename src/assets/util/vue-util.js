const baseConfig = require('./baseConfig')
export default {
  install(Vue, options) {
    const defaultParams = {
      pageSize:baseConfig.pageSize,
      pageNo:baseConfig.pageNo
    }
    Vue.prototype.$get = function (url,parmas,successCallBack,errorCallBack) {
      const defaultErrorCallBack = err => {
        this.showAlert(err,'error')
      }
      if(!errorCallBack){
        errorCallBack = defaultErrorCallBack
      }
      parmas = $.extend(defaultParams,parmas)
      this.$axios.get(url,parmas).then( res => {
        this.showAlert('获取成功')
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
    Vue.prototype.showAlert = function (content,type) {
      this.$message({
        message: content,
        type: type || 'success'   //success/warning/info/error
      });
    }
    Vue.prototype.getRandomColor =  function(){
      return '#'+('333333'+(Math.random()*0x15720922<<0).toString(16)).substr(-6);
    }
  }
}
