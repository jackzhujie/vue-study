const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
	publicPath: './',  //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
	chainWebpack: config => {
		config.module
			.rule('css')
			.test(/\.css$/)
			.oneOf('vue')
			.resourceQuery(/\?vue/)
			.use('px2rem')
			.loader('px2rem-loader')
			.options({
				remUnit: 75
			})
		// 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
		config.resolve.alias
			.set('@', resolve('src'))
			.set('assets', resolve('src/assets'))
			.set('components', resolve('src/components'))
			.set('views', resolve('src/views'))
	},
}
