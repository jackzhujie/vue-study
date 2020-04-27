<template>
  <div class="reduceUse">
    <h1>2020年4月27日，reduce函数讲解</h1>
    <h5>可以打开控制台查看运行结果</h5>
  </div>
</template>

<script>
	export default {
		name: "reduceUse",
		components: {},
		data() {
			return {}
		},
		created: function () {
			const baseData = [
				{age: 10, name: '小明'},
				{age: 15, name: '小黄'},
				{age: 18, name: '小王'},
				{age: 18, name: '小白'},
				{age: 21, name: '小陈'}
			];
			// 求和
			baseData.reduce((total, currentValue) => total + currentValue.age, 0);
			baseData.reduce((previousValue, currentValue, index) => {
				console.log(index)
				if (typeof previousValue === 'number') {
					return previousValue + currentValue.age
				} else {
					return previousValue.age + currentValue.age
				}
			})
			// 去重
			let resultArr = baseData.reduce((result, currentValue, index) => {
				if (!result.find(item => item.age === currentValue.age)) {
					result.push(currentValue)
				}
				return result
			}, [])
			console.log(resultArr, 'result')
        // 计数
		  baseData.reduce((result, currentValue) => currentValue.age < 18 ? ++result : result, 0)

		},
		methods: {},
		computed: {}
	}
</script>

<style lang="scss">
  .reduceUse {
  }
</style>
