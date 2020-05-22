<template>
	<div class="box"></div>
</template>

<script>
	export default {
		name: "test",
		data() {
			return {}
		},
		methods: {},
		computed: {},
		mounted: function () {
		},
		created: function () {
			// var worker = new Worker('./test.js');
			// setTimeout(function () {
			// 	worker.postMessage('start')
			// }, 2000)
			// worker.addEventListener('message', function (res) {
			// 	console.log('收到子线程的消息：' + JSON.stringify(res.data));
			// 	// 关闭worker线程
			// 	worker.terminate();
			// })

var allVarMap = {
	// 数字
	num: 123,
	// Infinity
	num1: 1 / 0,
	// NaN
	num2: null / 0,
	// 字符串
	str: 'abcdef',
	// 布尔类型
	bool: true,
	// 数组
	arr: [1, 2, 3, 4],
	// json对象
	json: {name: 'wenzi', age: 25},
	// 函数
	func: function () {
		console.log('this is function');
	},
	// 箭头函数
	func1: () => {
		console.log('arrow function')
	},
	// undefined类型
	und: undefined,
	// null类型
	nul: null,
	// date类型
	date: new Date(),
	// 正则表达式
	reg: /^[a-zA-Z]{5,20}$/,
	// 异常类型
	error: new Error()
}
var getVarType = function (val = 0) {
	var type = typeof val
	// object需要使用Object.prototype.toString.call判断
	if (type === 'object') {
		var typeStr = Object.prototype.toString.call(val)
		// 解析[object String]
		typeStr = typeStr.split(' ')[1]
		type = typeStr.substring(0, typeStr.length - 1)
	}
	return type
}
var results = []
for (let i in allVarMap) {
	results.push(getVarType(allVarMap[i]))
}
console.log(results.join())
// number,number,number,string,boolean,Array,Object,function,function,number,Null,Date,RegExp,Error
		}

	}
</script>
<style lang="scss">
	.box {
		width: 200px;
		height: 200px;
		margin-top: 100px;
		background: #f09;
		animation: bounce 2s infinite;
		animation-timing-function: linear;
		animation-direction: alternate;
		background-image: linear-gradient(45deg, #3023AE 0%, #f09 100%);
	}
	@keyframes bounce {
		0% {
			border-radius: 40% 60% 72% 28% / 70% 77% 23% 30%;
		}
		100% {
			border-radius: 75% 25% 24% 76% / 13% 15% 85% 87%;
		}
	}

</style>
