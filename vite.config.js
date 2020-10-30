const path = require('path')

module.exports = {
    // 引入第三方的配置
    optimizeDeps: {
        include: ["axios"]
    },
    outputDir: 'dist',
    assetsDir: 'static',
    port: '9000',
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    alias: {
        // 键必须以斜线开始和结束
        // '/@/': path.resolve(__dirname, './src')
        // '/@components/': path.resolve(__dirname, './src/components')
    },
    proxy: {
        // 如果是 /api 打头，则访问地址如下
        // '/api': {
        //   target: 'http://10.192.195.96:8087/',
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/api/, '')
        // }
    }
}