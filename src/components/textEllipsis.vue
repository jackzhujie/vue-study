<!--文字超时省虐号-->
<template>
	<div class="text-Ellipsis css" :title="text" v-if="lines === 1">
<!--		如果行数为1，则采用css实现-->
		{{text}}
	</div>
	<div class="text-Ellipsis" :title="text" ref="content" v-else>
		<!--		如果行数大于1，则采用js实现    -->
		{{showText}}
	</div>
</template>

<script>
	export default {
		props: {
			text: String,
			lines: {
				type: Number,
				default: 1
			}
		},
		name: "text-Ellipsis",
		components: {},
		data() {
			return {
				showText: ''
			}
		},
		methods: {

		},
		computed: {},
		mounted() {
			if (this.lines > 1) {
				const totalTextLen = this.text.length;
				const formatStr = () => {
					// 通过ref得到dom对象
					const ele = this.$refs.content;
					// 获取内容大小
					const baseWidth = window.getComputedStyle(ele).width;
					// 获取字的大小
					const baseFontSize = window.getComputedStyle(ele).fontSize;
					const lineWidth = +baseWidth.slice(0, -2);
					// 所计算的strNum为元素内部一行可容纳的字数(不区分中英文)
					const strNum = Math.floor(lineWidth / +baseFontSize.slice(0, -2));
					this.showText = '';
					// 多行可容纳总字数
					const totalStrNum = Math.floor(strNum * this.lines);
					const lastIndex = totalStrNum - totalTextLen;
					if (totalTextLen > totalStrNum) {
						this.showText = this.text.slice(0, lastIndex - 3).concat('...');
					} else {
						this.showText = this.text;
					}
				}
				// 一开始就执行一次
				formatStr()
				window.addEventListener('resize', formatStr)
				// 利用vue新特性，在销毁钩子之前beforeDestroy，取消绑定事件
				this.$once('hook:beforeDestroy', function() {
					window.removeEventListener('resize', formatStr)
				})
			}
		},
		created: function () {}
	}
</script>

<style lang="scss">
	.text-Ellipsis{
		&.css {
			/*超出隐藏*/
			overflow: hidden;
			/*文字一行显示，不换行*/
			white-space: nowrap;
			/*文字超出显示省略号*/
			text-overflow: ellipsis;
		}
	}
</style>
