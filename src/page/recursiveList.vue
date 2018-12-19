<template>
    <!--递归遍历-->
    <div class="recursiveList">
        <h5>递归遍历的实例，可以下载源码查看recursiveList.vue文件</h5>
    </div>
</template>

<script>
    export default {
        name: "recursiveList",
        data() {
            return {}
        },
        methods: {
            recursiveSort(){
                var quickSort = function(arr) {
                    if (arr.length <= 1) {//如果数组长度小于等于1无需判断直接返回即可
                        return arr;
                    }
                    var pivotIndex = Math.floor(arr.length / 2);//取基准点
                    var pivot = arr.splice(pivotIndex, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
                    var left = [];//存放比基准点小的数组
                    var right = [];//存放比基准点大的数组
                    for (var i = 0; i < arr.length; i++){ //遍历数组，进行判断分配
                        if (arr[i] < pivot) {
                            left.push(arr[i]);//比基准点小的放在左边数组
                        } else {
                            right.push(arr[i]);//比基准点大的放在右边数组
                        }
                    }
                    //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
                    return quickSort(left).concat([pivot], quickSort(right));
                };

                var arr = [14, 50, 80, 7, 2, 2, 11];
                console.log(quickSort(arr));
                /*
                 * 基准为7时，第一次分区得到左右两个子集[ 3, 2,]   7   [14, 15, 76, 11];
                 * 以基准为2，对左边的子集[3,2]进行划分区排序,得到[2] 3。左子集排序全部结束
                 * 以基准为76，对右边的子集进行划分区排序,得到[14, 15, 11] 76
                 * 此时对上面的[14, 15, 11]以基准为15再进行划分区排序， [14, 11] 15
                 * 此时对上面的[14, 11]以基准为11再进行划分区排序， 11  [14]
                 * 所有无序区间都只剩下一个元素，递归结束
                 *
                 */
            },
            asyncTest() {
                var forTest = function () {
                    console.time("for时间")
                    for (let i = 0; i < 5; i++) {
                        setTimeout(function () {
                            console.log('for循环输出：' + (i + 1))
                            if(i+ 1 === 5){
                                console.timeEnd("for时间")
                            }
                        }, 1000 * (i + 1))
                    }
                }

                var recursiveTest = function(){
                    console.time("递归时间")
                    const test = function (i) {
                        setTimeout(function () {
                            i = i + 1
                            console.log('递归输出：' + i)
                            if(i < 5){
                                test(i)
                            }else {
                                console.timeEnd("递归时间")
                            }
                        }, 1000)
                    }
                    test(0)
                }
                recursiveTest()
                forTest()
            },
            moreFor() {
                var data = [
                    {
                        name: "所有物品",
                        children: [
                            {
                                name: "水果",
                                children: [{name: "苹果", children: [{name: '青苹果'}, {name: '红苹果'}]}]
                            },
                            {
                                name: '主食',
                                children: [
                                    {name: "米饭", children: [{name: '北方米饭'}, {name: '南方米饭'}]}
                                ]
                            },
                            {
                                name: '生活用品',
                                children: [
                                    {name: "电脑类", children: [{name: '联想电脑'}, {name: '苹果电脑'}]},
                                    {name: "工具类", children: [{name: "锄头"}, {name: "锤子"}]},
                                    {name: "生活用品", children: [{name: "洗发水"}, {name: "沐浴露"}]}
                                ]
                            }
                        ]
                    }]
                //普通遍历实现
                var forFunction = function () {
                    var str = ""
                    data.forEach(function (row) {
                        row.children.forEach(function (row) {
                            row.children.forEach(function (row) {
                                row.children.forEach(function (row) {
                                    str += (row.name + ";")
                                })
                            })
                        })
                    })
                    console.log(str)
                }
                //递归遍历实现
                var recursiveFunction = function () {
                    var str = ''
                    const getStr = function (list) {
                        list.forEach(function (row) {
                            if (row.children) {
                                getStr(row.children)
                            } else {
                                str += row.name + ";"
                            }
                        })
                    }
                    getStr(data)
                    console.log(str)
                }

                forFunction()
                recursiveFunction()
            }
        },
        computed: {},
        created: function () {
            var arrList = [1, 2, 3, 5, 100, 500, 10000, 10000, 1000, 10000002]

            //for循环测试
            function forTest() {
                console.time("for循环")
                for (let i in arrList) {
                    console.log(((arrList[i] + arrList[i]) * 5 - arrList[i]) / arrList[i])
                }
                console.timeEnd("for循环")
            }

            //递归遍历测试
            function recursive() {
                console.time("递归遍历")
                const testFun = function (i) {
                    console.log(((arrList[i] + arrList[i]) * 5 - arrList[i]) / arrList[i])
                    if (i == arrList.length - 1) {
                        return
                    }
                    i++
                    testFun(i)
                }
                testFun(0)
                console.timeEnd("递归遍历")
            }

            forTest()
            recursive()
            this.moreFor()
            this.asyncTest()
            this.recursiveSort()
        }
    }
</script>

<style lang="scss">
    .recursiveList {
    }
</style>
