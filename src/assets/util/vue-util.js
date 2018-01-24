const baseConfig = require('./baseConfig')
export default {
  install(Vue, options) {
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
