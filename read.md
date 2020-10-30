#  创建遇到的问题
1.使用antd下载要用新版本
npm i ant-design-vue@next -S
2.antd中使用图标报错
 # 1.vite.config.js 引入
    import { UserConfig } from 'vite'

    module.exports = {
        // 引入第三方的配置
        optimizeDeps: {
            include: ['@ant-design/colors']
        }

    }
# 2.或者在package.json 中
 添加"@ant-design/colors": "^4.0.5"
 或者下载 yarn add @ant-design/colors

 



