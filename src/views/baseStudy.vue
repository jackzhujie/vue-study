<template>
    <!--vue基础知识-->
    <div class="vueBase">
      <ul>
        <li>
          <div class="title">vue是什么</div>
          <p>
              vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
          </p>
        </li>
        <li>
          <div class="title">基础语法</div>
          <p>
              Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统。这里解释一下，可以在页面上使用this（vue）对象上的变量和函数，可以使用原生js方法，js表达式，一切符合js语法的单行js都能运行。下面的例子进行一些举例。
          </p>
        </li>
        <li>
          <div class="title">内置指令</div>
          <p>
              vue内置了多个指令，指令能直接作用到页面上，而且能使用上面讲到的所有语法。v-text、v-html、v-if、v-show、v-for、v-model是常用的内置指令，指令还可以使用自定义指令，后面会讲到。
          </p>
        </li>
        <li>
          <div class="title">v-model</div>
          <p>v-text,v-if,v-show,v-html,v-bind,v-model,v-for,</p>
        </li>
        <li>
          <div class="title">说明</div>
          <p>
              可以看到，上面所有的指令，都会被cout变量影响或者改变，这里提一下，v-if和v-show的区别，v-if可以作用在template这个内置组件上，可以不对html结构产生影响，并可以结合v-else-if和v-else使用。v-show就是一段thml的显示和隐藏。他们的渲染顺序不一样，v-if是在需要的时候才开始渲染，而v-show是一开始就渲染了里面的html。
              v-mode指令，一般是绑定在表单上，如input、testarea、radio、select等可以让用户输入或改变的demo上。这种变量就具有双向绑定，意思是用户输入的，能马上被js捕获到，而js改变的，就能马上展现在页面上。上面的count变量就具有着一特性。
          </p>
        </li>
        <li>
          <div class="title">Class 与 Style 绑定</div>
          <p>class和style的绑定在vue里面比较特殊，但是比较常用，这里具体讲一下。</p>
        </li>
        <li>
          <div class="title">组件基础</div>
          <p>组件是vue的核心功能，这里做基础讲解，后面会单独出一片详细的组件。组件：意思是说，我把一段公共的模块提出处理，封装在一起，然后在多个页面去引用这个模块，从而达到避免写重复代码的目的。</p>
        </li>
        <li>
          <div class="title">总结</div>
          <p>
              上面的源代码可以在我的github上下载：https://github.com/jackzhujie/vue-study.git，后期会陆续推出vue组件专题，vue的computed和watch比较和使用，vue生命周期，vue-router，vuex等第三方库，想第一时间查看更新，可关注本人公众号。
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "vueBase",
        data: function () {
            return {}
        },
        methods: {},
        mounted: function () {
        },
        computed: {},
        created: function () {
        }
    }
</script>

<style lang="scss">
    .vueBase {
        p{
            font-size: 16px;
            line-height: 1.5;
            padding: 20px;
        }
    }
</style>
