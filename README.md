# -vite-vue3
vue3

# vue3+vite搭建项目

  1. 安装vite
  npm install -g create-vite-app
  2. 初始化项目
  npm init vite-app <project-name>
  cd <project-name>
  yarn install(npm install)
  3. 运行
  yarn dev (npm run dev)

  4. 页面下载vue-router
  yarn add vue-router@next --save

  5. 引入并使用路由
  import { createRouter, createWebHistory } from 'vue-router'

  export const router=createRouter({
      history:createWebHistory(),
      routes:[{
          path:'/login'
      }]
  })
 6. main.js中
 import router from './router
 app.use(router)

 7.创建vite.config.js配置代理
 8.下载使用sass yarn add node-sass sass-loader -D
 9.下载使用axios 



