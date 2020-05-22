<!--css实现三角形-->
<template>
    <div class="triangleTest">
        <h1>2020年4月30日，css实现三角形</h1>
        <div class="content">
            <div class="up"></div>
            <div class="left"></div>
            <div class="down"></div>
            <div class="right"></div>
            <div class="top-left"></div>
            <div class="top-right"></div>
            <div class="bottom-right"></div>
            <div class="bottom-left"></div>
        </div>
        <div id="box"></div>
    </div>
</template>

<script>
	export default {
		name: "triangleTest",
		components: {},
		data() {
			return {}
		},
		methods: {},
		computed: {},
		created: function () {
		}
	}
</script>

<style lang="scss">
    .triangleTest {
        .content div {
            margin-bottom: 20px;
            width: 0;
            height: 0;
            &.up {
                border-left: 0px solid transparent;
                border-right: 40px solid transparent;
                border-bottom: 100px solid red;
                border-top: 0;
            }
            &.left {
                border-left: 50px solid red;
                border-top: 50px solid red;
                border-right: 50px solid transparent;
                border-bottom: 50px solid transparent;
            }
            &.right {
                border-left: 50px solid transparent;
                border-top: 50px solid transparent;
                border-right: 50px solid red;
                border-bottom: 50px solid red;
            }
            &.bottom-left {
                width: 120px;
                height: 120px;
                background-color: transparent;
                border-left: 50px solid transparent;
                border-top: 50px solid transparent;
                border-right: 50px solid transparent;
                border-bottom: 50px solid red;
            }
        }
        #box{
            width:160px;
            height:160px;
            background:yellow;
            border-top: 80px solid red;
            border-right:80px solid black;
            border-bottom:80px solid green;
            border-left:80px solid blue;
        }
    }
</style>
