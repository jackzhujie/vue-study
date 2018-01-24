export default {
  install(Vue, options) {
    Vue.prototype.constMap = {
      catSort: {
        'Age': '年龄最小',
        'Birthday': '出生时间',
        'LikeCount': '最多赞',
        'Price': '最贵的小猫'
      },
      catStatus:{
        '0':"初始小猫",
        '1':"在售小猫",
        '2':"求偶小猫"
      }
    }
  }
}
