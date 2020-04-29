<template>
    <!--    异步测试-->
    <div class="asyncTest">
        <h1>2020年4月29日问题：前端异步是什么？哪些情况下会发生异步？</h1>
        <h5>可以打开控制台查看运行结果</h5>
    </div>
</template>

<script>
	const moment = require('moment')
	export default {
		name: "asyncTest",
		components: {},
		data() {
			return {}
		},
		methods: {
			asyncFun() {
				return new Promise((resolve) => {
					console.log('1', '时间：', moment().format('YYYY-MM-DD hh:mm:ss'))
					setTimeout(() => {
						console.log('2', '时间：', moment().format('YYYY-MM-DD hh:mm:ss'))
						resolve()
					}, 1000)
					console.log('3', '时间：', moment().format('YYYY-MM-DD hh:mm:ss'))
				})
			},
			async run() {
				await this.asyncFun()
			}
		},
		computed: {},
		created: function () {
			this.run()
		}
	}
</script>

<style lang="scss">
    .asyncTest {
    }
</style>
