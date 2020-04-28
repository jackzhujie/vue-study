<template>
  <div class="vuedirective">
    <span>
      自定义指令：
      <br>
      实现一个只能输入数字的输入框 <br>
    </span>
    <input type="text" v-model="age" placeholder="请输入年龄" v-num-check="changeAge">
  </div>
</template>

<script>
  let args = {
    el: '指令所绑定的元素，可以用来直接操作 DOM ',
    binding: {
      name: '指令名，不包括 v- 前缀。',
      value: '指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。',
      oldValue: '指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。',
      expression: "字符串形式的指令表达式。例如 v-my-directive='1 + 1' 中，表达式为 '1 + 1'",
      arg: "传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 'foo'",
      modifiers: "一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。",
    },
    vnode: "Vue 编译生成的虚拟节点。",
    oldVnode: "上一个虚拟节点"
  }
  var numCheckObj = {
    bind: function (el, binding) { //被绑定
      console.log('1 - bind');
      binding.value(el.value.replace(/[^0-9.]/g, ''))
    },
    inserted: function () { //绑定到节点
      console.log('2 - inserted');
    },
    update: function (el) { //组件更新
      console.log('before value ' + el.value)
      console.log('3 - update');
    },
    componentUpdated: function (el, binding, vnode) { //组件更新完成
      console.log('4 - componentUpdated');
      //替换掉非数字
      binding.value(el.value.replace(/[^0-9.]/g, ''))
    },
    unbind: function () { //解绑
      console.log('5 - bind');
    }
  }
  export default {
    name: "vueDirective",
    data(){
      return {
        age:-10
      }
    } ,
    methods:{
      //这里需要改变data里面的值，所以要添加一个回调
      changeAge(val){
        this.age = val;
      }
    },
    //这里局部引入
    directives:{
      'num-check':numCheckObj
    },
    mounted: function () {
    },
    computed: {},
    created: function () {
    }
  }
</script>

<style lang="scss">
  .vuedirective {

  }
</style>
