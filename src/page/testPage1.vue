<template>
    <canvas id="myCanvas"></canvas>
</template>

<script>
    class FlashChart {
        constructor(){

             this.xNum = 40
            const xStep = 10
            const yStep = 10
            let allTextArr = []
            const allTextNum = 1000
            const randomColorNum = 10
            const defaultColor = '#0EA9FF',lightColor = '#6487A7'
        }
    }


    const xNum = 40
    const xStep = 10
    const yStep = 10
    let allTextArr = []
    const allTextNum = 1000
    const randomColorNum = 10
    const defaultColor = '#0EA9FF',lightColor = '#6487A7'
    function getRandomChart(){
        const num = Math.ceil(Math.random() * 27);
        let result
        if(num === 26){
            result = 0
        }else if(num === 27){
            result = 1
        }else {
            result = String.fromCharCode(65+num)
        }
        allTextArr.push({value:result,color:defaultColor})
    }

    function getChartPosition(i) {
        const x = (allTextArr.length - 1) %xNum *  xStep
        const y = Math.floor(allTextArr.length/xNum) * yStep + 20
        allTextArr[i].x = x
        allTextArr[i].y = y
    }

    function getRandomColor() {
        let len = allTextArr.length
        for(let i = 0 ; i < randomColorNum ;i++){
            allTextArr[Math.floor(Math.random() * len)].color = lightColor
        }
    }


    function run() {
        var canvas = document.getElementById('myCanvas');
        canvas.width = 1000;
        canvas.height = 625;
        var context = canvas.getContext('2d');
        context.font = 'bold 10px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'bottom';
        function appendTextRandom() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            for(let i = 0 ; i < allTextArr.length ;i++){
                context.fillStyle = allTextArr[i].color;
                context.fillText(allTextArr[i].value, allTextArr[i].x, allTextArr[i].y);
                context.fill()
            }
            allTextArr.forEach(row => {
                row.y += 10
                if(row.y >= canvas.height){
                    row.y = 0
                }
            })
            // window.requestAnimationFrame(appendTextRandom);
        }
        appendTextRandom()
    }

    function initFun() {
        for(let i = 0 ; i < allTextNum ;i++){
            getRandomChart()
            getChartPosition(i)
        }
        getRandomColor()
        run()
    }

    export default {
        name: "testPage",
        data() {
            return {
                form: {}
            }
        },
        methods: {},
        mounted:function(){
            initFun()
        },
        created: function () {

        }
    }
</script>

<style lang="scss">
    #myCanvas {
        width: 1000px;
        height: 625px;
    }

    .sell-cat {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        .seller-info {
            margin: 40px 0;
            .title {
                font-size: 20px;
                margin-bottom: 20px;
                font-weight: bold;
            }
            .content {
                font-weight: 400;
                font-style: normal;
                font-size: 13px;
                color: #333333;
            }
        }
    }
</style>
