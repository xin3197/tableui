//创建webpack.config.js

module.exports = {
     entry:'./src/index.js', //入口文件
     output:{
          //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
          path:__dirname, //输出位置
          filename:'./release/bundle.js' //输入文件
     },
     module:{
          rules:[{
                   test:/\.js?$/,//支持正则
				   exclude: /(node_modules)/,
                   loader:'babel-loader' 
           }]
     }
}