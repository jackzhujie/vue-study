<template>
    <div class="test">
        <div id="myCanvas"></div>
    </div>
</template>

<script>
    window.onload = function () {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        function appendTextRandom(){
            context.font = 'bold 35px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'bottom';
            context.fillStyle = '#ccc';
            context.strokeText("Hello Canvas", 0, 0);
            context.fillText("Hello Canvas", 0, 30);
        }

        appendTextRandom()
    }

    export default {
        name: "test",
        data() {
            return {}
        },
        methods: {},
        computed: {},
        mounted:function(){
        },
        created: function () {
        }
    }
</script>

<style lang="scss">
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: black;
    }

    div#box {
        width: 1000px;
        height: 1000px;
    }
</style>
