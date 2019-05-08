module.exports = {
    //打包空白
    publicPath: "./",
    lintOnSave: true,
    //设置代理
    devServer: {
        proxy: {
            '/agent': {
                target: ' https://jingpincang.quansuwangluo.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/agent': ''
                }
            }
        },
    },
    //px转rem
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 32,
                        propList: ['*'],
                        selectorBlackList: ['vux-']
                    })
                ]
            }
        }
    }
}