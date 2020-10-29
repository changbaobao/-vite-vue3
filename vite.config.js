const path = require('path')

module.exports = {
    // 引入第三方的配置
    optimizeDeps: {
        include: ["axios", "sass"]
    },
    alias: {
        // 键必须以斜线开始和结束
        '/@/': path.resolve(__dirname, './src')
            // '/@components/': path.resolve(__dirname, './src/components')
    },
    proxy: {
        // 如果是 /lsbdb 打头，则访问地址如下
        // '/lsbdb': {
        //   target: 'http://10.192.195.96:8087/',
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/lsbdb/, '')
        // }
    }
}