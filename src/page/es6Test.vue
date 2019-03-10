<template>
    <!--该页面主要用于es6新特性的学习与测试-->
    <div class="es6Test">
        <h1>es6学习笔记</h1>
        <section>
            <h3>1.剪头函数</h3>
            <ol>
                <li>1.剪头函数没有arguments对象</li>
                <li>2.剪头函数没有prototype属性，不能用构造函数(不能用new关键字实例化)</li>
                <li>3.箭头函数没有this，它的this对象指向引用它的对象。</li>
            </ol>
        </section>
        <section>
            <h3>2.es6  class理解与使用</h3>
            <h5>关于class的基本用法</h5>
            <p>以前的JavaScript没有类的概念，他是基于原型的面相对象的语言。原型对象的特点就是讲自身属性共享给新对象。我们先看一下下面的代码实现：</p>
            <code>
                //常规写法
                function Person(name,age) {
                    this.name = name;
                    this.age = age;
                }
                Person.prototype.sayInfo = function () {
                    console.log(`${this.name}是${this.age}岁`)
                }
                const liLei = new Person('LiLei',20)
                liLei.sayInfo()
                //LiLei是20岁
            </code>
            <p>这种实现跟java比，实现类的方案太特别了，下面我们看一下es6的类的实现方式：</p>
            <code>
                class Person{ //定义了一个名字为Person的类
                    constructor(name,age){ //constructor是一个构造方法，用来接收参数
                    this.name = name;  //this代表的是实例对象
                    this.age = age;
                }
                sayInfo(){
                    console.log(`${this.name}是${this.age}岁`)
                    }
                }
                const liLei = new Person('LiLei',21)
                liLei.sayInfo()
            </code>
            <p>由下面代码可以看出类实质上就是一个函数。类自身指向的就是构造函数。所以可以认为ES6中的类其实就是构造函数的另外一种写法！</p>
            <code>
                console.log(typeof Person);//function
                console.log(Person===Person.prototype.constructor);//true
            </code>
            <h5>class的</h5>
        </section>

    </div>
</template>

<script>

    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: "es6Test",
        data() {
            return {
                config:{
                    mode:1  //显示模式
                },
                arrowContent:''
            }
        },
        methods: {
            arrowFun(){

            },
            esClassTest(){
                //常规写法
                const commonWrite = function () {
                    function Person(name,age) {
                        this.name = name;
                        this.age = age;
                    }
                    Person.prototype.sayInfo = function () {
                        console.log(`${this.name}是${this.age}岁`)
                    }
                    const liLei = new Person('LiLei',20)
                    liLei.sayInfo()
                }
                commonWrite()

                //es6写法
                const es6Write = function () {
                    class Person{ //定义了一个名字为Person的类
                        constructor(name,age){ //constructor是一个构造方法，用来接收参数
                            this.name = name;  //this代表的是实例对象
                            this.age = age;
                        }
                        sayInfo(){
                            console.log(`${this.name}是${this.age}岁`)
                        }
                    }
                    const liLei = new Person('LiLei',21)
                    liLei.sayInfo()
                }
                es6Write()

                //类的继承
                const classExtentTest = function () {
                    class Student {
                        constructor(name){
                            this.name = name
                        }
                        sayName(){
                            console.log(this.name)
                        }
                        testFn(){
                            console.log('我是父类的函数！')
                        }
                    }
                    class Worker extends Student{
                        sayWork(){
                            console.log(this.name)
                        }
                        testFn(){
                            console.log('我是子类的函数！')
                        }
                    }
                    const person = new Worker('liLei')
                    person.sayName()
                    person.sayWork()
                    person.testFn()
                    //输出：
                    //liLei
                    //liLei
                    //我是子类的函数！
                }
                classExtentTest()

                const superTest = function () {
                    class Student {
                        constructor(name){
                            this.name = name
                        }
                        testFn(){
                            console.log('我是父类的函数！')
                        }
                    }
                    class Worker extends Student{
                        constructor(name,age,sex){
                            super(name)    //这里必须先调用super，才有下文的this对象，这里扩展了一个变量age
                            this.age = age
                            this.sex = sex
                        }
                        testFn(){
                            super.testFn();
                            console.log(super.name)
                            console.log("年龄" + this.age)
                            console.log("性别" + this.sex)
                            console.log('我是子类的函数！')
                        }
                    }
                    const person = new Worker('liLei','20')
                    person.testFn()
                    //输出：
                    //我是父类的函数！
                    //年龄20
                    //性别undefined
                    //我是子类的函数！
                    //我是子类的函数！
                }
                superTest()

                const staticText = function () {
                    class Person{      //没有constructor的类会默认生成一个constructor构造器
                        static sayName(){
                            console.log("我是static函数")
                        }
                    }
                    class Student extends Person{}
                    const student = new Student()
                    Person.sayName()
                    Student.sayName()
                    // student.sayName()
                }
                staticText()

                const classUsed = function () {
                    class PageUtil{
                        constructor(pageNo,pageSize,total){    //构造初始变量
                            this.pageNo = pageNo;     //起始页面
                            this.pageSize = pageSize  //一页数据条数
                            this.total = total        //数据总数
                            this.currentPage = 0      //当前选中页数
                            this.pageTotal = Math.ceil(this.total/this.pageSize)   //总页数
                        }
                        nextPage(){     //下一页
                            if(this.currentPage < this.pageTotal){
                                this.currentPage++
                            }
                        }
                        beforePage(){    //上一页
                            if(this.currentPage > 1){
                                this.currentPage--
                            }
                        }
                        jumpPage(page){     //跳页
                            this.currentPage = page
                        }
                        changePageSize(pageSize){    //改变页大小
                            this.pageSize = pageSize
                            this.pageTotal = Math.ceil(this.total/this.pageSize)   //总页数
                        }
                        getTotalPage(){    //获取总页数
                            return Math.ceil(this.total/this.pageSize)
                        }
                    }


                    class DialogPage extends PageUtil{    //继承PageUtil类
                        constructor(pageNo,pageSize,total,pageTotal){
                            super(pageNo,pageSize,total)
                            this.pageTotal = pageTotal
                        }
                        getTotalPage(){
                            return this.pageTotal || super.getTotalPage()   //重写getTotalPage方法
                        }
                    }
                    const contentPage = new PageUtil(1,10,100)   //实例化2个pageUtil对象
                    contentPage.getTotalPage()
                    const dialogPage = new DialogPage(1,10,100,10)
                    dialogPage.getTotalPage()
                }
                classUsed()

            },
            getEditContent(){
                console.log(arguments,'234')
            }
        },
        computed: {},
        components:{
            mavonEditor: mavonEditor
        },
        created: function () {
            // 箭头函数测试
            this.arrowFun()
            // class类测试与理解
            this.esClassTest()
        }
    }
</script>

<style lang="scss">
    .es6Test {
    }
</style>
