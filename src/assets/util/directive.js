// vue指令
export default (Vue) => {
	Vue.directive('focus', {
		inserted: function(el) { //只调用一次，指令被绑定
			el.focus()
		}
	})
}
