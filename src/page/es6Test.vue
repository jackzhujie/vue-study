<template>
    <!--该页面主要用于es6新特性的学习与测试-->
    <div class="es6Test">
        <h1>es6学习笔记</h1>
        <h3>剪头函数</h3>
        <ol>
            <li>1.剪头函数没有arguments对象</li>
            <li>2.剪头函数没有prototype属性，不能用构造函数(不能用new关键字实例化)</li>
            <li>3.箭头函数没有this，它的this对象指向引用它的对象。</li>
        </ol>
        <MarkDown @on-save="getEditContent" :mode="config.mode" :initialValue="test">
            ```
                var d = 1
            ```
        </MarkDown>
        <div class="run-result">

        </div>
    </div>
</template>

<script>

    import MarkDown from 'vue-meditor'
    export default {
        name: "es6Test",
        data() {
            return {
                test:'```var d = 1```',
                config:{
                    mode:1  //显示模式
                },
                value1:''
            }
        },
        methods: {
            getEditContent(){
                console.log(arguments,'234')
            }
        },
        computed: {},
        components:{
            MarkDown
        },
        created: function () {
        }
    }
</script>

<style lang="scss">
    .es6Test {
    }
</style>
