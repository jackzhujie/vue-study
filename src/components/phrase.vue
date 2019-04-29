<template>
<!--    寻找最长回文字符串-->
    <div class="phrase">
        <h5>给定一个字符串，寻找最长回文字符串！</h5>
        <h5>思路</h5>
        <p> 思路1，把每一个字符串拿出来，判断是回文字符串，并找出最长</p>
        <mavon-editor v-model="value"></mavon-editor>
    </div>
</template>

<script>
    export default {
        name: "phrase",
        data() {
            return {
                value:'##### 给定一个字符串，寻找最长回文字符串！\n' +
                    '> 思路1：把每一个字符串拿出来，判断是回文字符串，并找出最长。代码如下：\n' +
                    '```javascript\n' +
                    'function getPhrase(str){\n' +
                    '                // 思路1，把每一个字符串拿出来，判断是回文字符串，就拿出长度\n' +
                    '                let index = 3;\n' +
                    '                const test =  (i)=> {\n' +
                    '                    i = i + 1\n' +
                    '                    if(parseInt(i) > str.length - index){\n' +
                    '                        index = index + 1\n' +
                    '                        if(index <= str.length){\n' +
                    '                            i = -1\n' +
                    '                            test(i)\n' +
                    '                        }else {\n' +
                    '                            console.log(this.phrase,this.maxLen)\n' +
                    '                        }\n' +
                    '                    }else {\n' +
                    '                        this.isPhrase(str.substr(i,index))\n' +
                    '                        test(i)\n' +
                    '                    }\n' +
                    '                }\n' +
                    '                test(-1)\n' +
                    '          }\n' +
                    'console.time(\'方法一耗时：\')\n' +
                    'getPhrase(\'12aa2111fwefwefwkfwpjfpwjpjeogjerklgjwoifjowejfoiwfowjosjfo2382389027u39idhjughewuihwifnwkjefbwiugfuwigfhiwuhfiwhif\')\n' +
                    'console.timeEnd(\'方法一耗时：\')\n' +
                    '```',
                phrase:'',
                maxLen:0
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
                    if(str.length > this.maxLen){
                        this.phrase = str;
                        this.maxLen = this.phrase.length
                    }
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
                        }else {
                            console.log(this.phrase,this.maxLen)
                        }
                    }else {
                        this.isPhrase(str.substr(i,index))
                        test(i)
                    }
                }
                test(-1)
            },
            longestPalindrome(s){
                let sub
                if (s.length == 1) {
                    return s
                }
                let str = '#' + s.split('').join('#') + '#'
                let rl = []
                let mx = 0
                let pos = 0
                let ml = 0
                for (let i = 0; i < str.length; i++){
                    if (i < mx) {
                        rl[i] = Math.min(rl[2 * pos - i], mx - i)
                    } else {
                        rl[i] = 1
                    }
                    while (i - rl[i] > 0 && i + rl[i] < str.length && str[i - rl[i]] == str[i + rl[i]]) {
                        rl[i]++
                    }
                    if (rl[i] + i - 1 > mx) {
                        mx = rl[i] + i - 1
                        pos = i
                    }
                    if (ml < rl[i]) {
                        ml = rl[i]
                        sub = str.substring(i - rl[i]+1, i + rl[i])
                    }
                }
                const val = sub.split('#').join('')
                console.log(val,val.length)
            }
        },
        computed: {
            phraseLen:function () {
                return this.phrase.length
            }
        },
        created: function () {
            console.log('选择字符串为：12aa2111fwefwefwkfwpjfpwjpjeogjerklgjwoifjowejfoiwfowjosjfo2382389027u39idhjughewuihwifnwkjefbwiugfuwigfhiwuhfiwhif')
            console.time('方法一耗时：')
            this.longestPalindrome('12aa2111fwefwefwkfwpjfpwjpjeogjerklgjwoifjowejfoiwfowjosjfo2382389027u39idhjughewuihwifnwkjefbwiugfuwigfhiwuhfiwhif')
            console.timeEnd('方法一耗时：')
            console.time('方法二耗时：')
            this.getPhrase('12aa2111fwefwefwkfwpjfpwjpjeogjerklgjwoifjowejfoiwfowjosjfo2382389027u39idhjughewuihwifnwkjefbwiugfuwigfhiwuhfiwhif')
            console.timeEnd('方法二耗时：')
        }
    }
</script>

<style lang="scss">
    .phrase {
    }
</style>
