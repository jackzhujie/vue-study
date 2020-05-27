const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const CompressionWebpackPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli");
const BrotliPlugin = require("brotli-webpack-plugin");

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
	publicPath: './',  //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
	configureWebpack: config => {
		// 启用压缩
		const plugins = [];
		if (IS_PROD) {
			plugins.push(
				new CompressionWebpackPlugin({
					algorithm(input, compressionOptions, callback) {
						return zopfli.gzip(input, compressionOptions, callback);
					},
					compressionOptions: {
						numiterations: 15
					},
					minRatio: 0.99,
					test: productionGzipExtensions
				})
			);
			plugins.push(
				new BrotliPlugin({
					test: productionGzipExtensions,
					minRatio: 0.99
				})
			);
		}
		config.plugins = [...config.plugins, ...plugins];
		// 启用cdn加速
		config.externals = {
			vue: "Vue",
			"element-ui": "ELEMENT",
			"vue-router": "VueRouter",
			vuex: "Vuex",
			axios: "axios",
			'jquery' : '$',
			echarts: 'echarts'
		};
	},
	chainWebpack: config => {
		const cdn = {
			css: ["//cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/theme-chalk/index.css"],
			js: [
				"//cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js",
				"//cdn.bootcdn.net/ajax/libs/vuex/3.1.3/vuex.min.js",
				"//cdn.bootcdn.net/ajax/libs/vue-router/3.1.3/vue-router.min.js",
				"//cdn.bootcdn.net/ajax/libs/echarts/4.2.0-rc.2/echarts.common.min.js",
				"//cdn.bootcdn.net/ajax/libs/jquery/3.2.0/jquery.min.js",
				"//cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js",
				"//cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js"
			]
		}
		// 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
		config.plugin("html").tap(args => {
			// html中添加cdn
			args[0].cdn = cdn;
			return args;
		});

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
	// 跨域配置
	devServer: {
		// overlay: { // 让浏览器 overlay 同时显示警告和错误
		//   warnings: true,
		//   errors: true
		// },
		// open: false, // 是否打开浏览器
		// host: "localhost",
		// port: "8080", // 代理断就
		// https: false,
		// hotOnly: false, // 热更新
		proxy: {
			"/api": {
				target: "http://203.195.156.57:3000/api", // 目标代理接口地址
				secure: false,
				changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
				// ws: true, // 是否启用websockets
				pathRewrite: {
					"^/api": "/"
				}
			}
		}
	}
}
