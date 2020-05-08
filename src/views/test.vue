<template>
    <div>

    </div>
</template>

<script>
    window.onload = function () {
        // var canvas = document.getElementById('myCanvas');
        // var context = canvas.getContext('2d');
        // function appendTextRandom(){
        //     context.font = 'bold 35px Arial';
        //     context.textAlign = 'center';
        //     context.textBaseline = 'bottom';
        //     context.fillStyle = '#ccc';
        //     context.strokeText("Hello Canvas", 0, 0);
        //     context.fillText("Hello Canvas", 0, 30);
        // }
        //
        // appendTextRandom()
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
    .button,.g-children {
        width: 100%;
        height: 100%;
        padding: 20px;
        border: 1px solid;
    }
    .g-father {
        width: 200px;
        height: 200px;
        padding: 20px;
        border: 1px solid;
    }
    .g-body {
        margin-top: 20px;
        width: 200px;
        border: 1px solid;
    }
    .g-body:focus-within {
        background-color: #5daf34;
    }
    .g-father:focus-within {
        background-color: #3a8ee6;
    }
    .g-children:focus-within{
        background-color: #2c3e50;
    }
    .button:focus-within {
        background-color: #606266;
        color: red;
    }
    a:hover{
        text-decoration: underline;
    }
    a:active {
        color: blue;
    }
    a:link {
        color: red;
    }
    a:visited {
        color: green;
    }
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    div#box {
        width: 1000px;
        height: 1000px;
    }
</style>
