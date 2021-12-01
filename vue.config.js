module.exports = {
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    publicPath: process.env.NODE_ENV === 'production' ? '/tinymce-vue3/' : '/', //项目根路径
    devServer: {
        // 所有的接口请求代理
        proxy: {
            '/api': { //请求路径关键字 
                target: 'http://127.0.0.1/testData/', //对应自己的接口
                changeOrigin: true,//是否允许跨域,在本地会创建一个虚拟服务端，然后发送请求的数据，
                ws: true,          // 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                // secure: true,                   //是否https接口
                pathRewrite: {
                    '^/api': '/'      //这里理解成用'/api'代替target里面的地址，后面组件中我们掉接口时直接用/api代替
                    // 比如我要调用'http://127.0.0.1/testData/data.json'，直接写'/api/data.json'即可
                }
            },
        }
    }
}