<template>
    <!--排序测试-->
    <div class="sortTest">
        <div class="test">我是测试</div>
    </div>
</template>

<script>
    export default {
        name: "sortTest",
        data() {
            return {
                randomLen:10
            }
        },
        methods: {
            getRandomArr(len){
                let arr = []
                for(let i = 0 ;i < len ; i++){
                    arr.push(Math.floor(Math.random() * 100))
                }
                return arr;
            },
            swap(arr,x,y){
                //交换
                const temp = arr[x]
                arr[x] = arr[y]
                arr[y] = temp
            },
            appStart(){
                const bubbleSort = ()=>{
                    const operateArr = this.getRandomArr(this.randomLen)
                    for(let i = 0 ; i < this.randomLen ; i++){
                        for(let j = i + 1 ;j < this.randomLen; j++){
                            if(operateArr[i] < operateArr[j]){
                                this.swap(operateArr,i,j)
                            }
                        }
                    }
                    console.log(operateArr,'bubbleSort')
                }
                const bubbleSortV2 = ()=>{
                    const operateArr = this.getRandomArr(this.randomLen - 2)
                    operateArr.unshift(1000)
                    operateArr.push(-1)
                    let flag
                    for(let i = this.randomLen - 1; i > 0; i--){
                        flag = false
                        for(let j = 0;j < i; j++){
                            if(operateArr[j] < operateArr[j + 1]){
                                flag = true
                                this.swap(operateArr,j,j + 1)
                            }
                        }
                        if(!flag){
                            break;
                        }
                    }
                    console.log(operateArr,'bubbleSortV2')
                }
                const selectSort = ()=> {
                    const operateArr = this.getRandomArr(this.randomLen)
                    // 每次找出最大的，把它放在最前面一位（大到小排序）
                    for(let i = 0 ; i < this.randomLen - 1;i++){
                        let maxDataIndex = i
                        for(let j = i + 1; j < this.randomLen; j++){
                            if(operateArr[maxDataIndex] < operateArr[j + 1]){
                                maxDataIndex = j + 1
                            }
                        }
                        this.swap(operateArr,i,maxDataIndex)
                    }
                    console.log(operateArr,'selectSort')
                }
                const insertSort = ()=>{
                    const operateArr = this.getRandomArr(this.randomLen)
                    for(let i = 1 ; i < this.randomLen ; i++){
                        for(let j = i - 1;j >= 0; j--){
                            if(operateArr[i] <= operateArr[j]){
                                const insertVal = operateArr[i]
                                operateArr.splice(i,1)
                                operateArr.splice(j + 1,0,insertVal)
                                break
                            }else if(j === 0){
                                const insertVal = operateArr[i]
                                operateArr.splice(i,1)
                                operateArr.splice(0,0,insertVal)
                            }
                        }
                    }
                    console.log(operateArr,'insertSort')
                }
                const mergeSort = ()=>{
                    // const operateArr = this.getRandomArr(this.randomLen)
                    // //递归，拿一个数组进行除2，直到不能除为止
                    // const merge = (i = 0,j = 0)=> {
                    //     if(j === i){
                    //         merge(j + 1,Math.random(j/2))
                    //     }if(j - i === 1){
                    //         if(arr[i] > arr[j]){
                    //             this.swap(operateArr,i,j)
                    //         }
                    //     }else {
                    //         merge(i,Math.random(j/2))
                    //     }
                    //     merge(0,this.randomLen - 1)
                    // }
                }
                // 冒泡排序
                bubbleSort()
                // 优化算法，如果所有的数据都是排序好的，那我就不需要每一个进行对比了
                bubbleSortV2()
                //选择排序
                selectSort()
                //插入排序
                insertSort()
                // 归并排序
                mergeSort()
            }
        },
        computed: {},
        created: function () {
            this.appStart()
        }
    }
</script>

<style lang="scss">
    .sortTest {
    }
</style>
