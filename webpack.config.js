var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require("webpack");
var path=require("path");
module.exports={
	devtool:"eval-source-map",
	entry:"./js/main.js",
	output:{
		path:"./dist/js",
		filename:"bundle.js"
		/*publicPath:"build"*/
	},
	devServer:{
		contentBase:"./html",  //本地服务器所加载的页面所在的目录
		colors:true,   //终端中输出结果为彩色
		inline:true,    //实时刷新
		port:8081		//设置默认监听端口,默认8080
	},
	resolve: {
        alias: {
          'jquery': path.resolve(__dirname, 'libs/jquery.min.js')
        }
    },
	module:{
		loaders:[
			{
				test:/\.scss$/,
				loader:"style!css!sass"
			},
			{
				test:/\.(png|jpe?g|gif)$/,
				loader:'url-loader?limit=8192&name=../img/[name].[ext]'
			},
			{
				test:/\.js$/,
				exclude:/node-modules/,
				loader:"babel",
				query:{
					presets:['es2015']
				}
			}
		]
	},
	plugins: [
      new HtmlWebpackPlugin({
          template: './html/banner.html'
      }),
      new webpack.ProvidePlugin({
	      $: 'jquery'
	  })
  	]
}