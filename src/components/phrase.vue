<template>
<!--    寻找最长回文字符串-->
    <div class="phrase">
        <h5>给定一个字符串，寻找最长会问字符串！</h5>
        <h5>思路</h5>
        <p> 思路1，把每一个字符串拿出来，判断是回文字符串，并找出最长</p>
    </div>
</template>

<script>
    export default {
        name: "phrase",
        data() {
            return {
                data:{
                    phrase:''
                }
            }
        },
        methods: {
            isPhrase(str){
                let flag = true
                let len = str.length
                for(let i = 0 ; i < len/2 ; i++){
                    if(str[i] !== str[len - 1 - i]){
                        flag = false
                        break;
                    }
                }
                if(flag){
                    this.phrase = str;
                    console.log(this.phrase,this.phrase.length,'len')
                }

            },
            getPhrase(str){
                // 思路1，把每一个字符串拿出来，判断是回文字符串，就拿出长度
                let index = 3;
                const test =  (i)=> {
                    i = i + 1
                    if(parseInt(i) > str.length - index){
                        index = index + 1
                        if(index <= str.length){
                            i = -1
                            test(i)
                        }
                    }else {
                        this.isPhrase(str.substr(i,index))
                        test(i)
                    }
                }
                test(-1)
            }
        },
        computed: {
            phraseLen:function () {
                return this.phrase.length
            }
        },
        created: function () {
            this.getPhrase('12aa2111')
        }
    }
</script>

<style lang="scss">
    .phrase {
    }
</style>
