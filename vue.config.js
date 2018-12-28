const vuxLoader = require("vux-loader");
module.exports = {
	configureWebpack: config => {
		vuxLoader.merge(config, {
			plugins: ['vux-ui']
		})
	},
	devServer: {
		open: true,
		proxy: {
			'/app': {
				target: 'http://zj.yqwoods.com',
				ws: true,
				changeOrigin: true
			}
		}
	}
}