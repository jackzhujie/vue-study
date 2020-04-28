<!--文字超出省略号-->
<template>
	<div class="ellipsisExceed">
		<h1>2020年4月27日问题：文字超出省略号组件</h1>
		<h4>单行</h4>
		<textEllipsis :text="text"></textEllipsis>
		<h4>多行</h4>
		<textEllipsis :text="text" :lines="2"></textEllipsis>
	</div>
</template>

<script>
	import textEllipsis from "../components/textEllipsis";
	export default {
		name: "ellipsisExceed",
		components: {textEllipsis},
		data() {
			return {
				text: '我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字'
			}
		},
		methods: {

		},
		computed: {},
		created: function () {}
	}
</script>

<style lang="scss">
	.ellipsisExceed{

	}
</style>
