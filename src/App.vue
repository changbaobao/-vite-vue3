<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/">点击我跳转首页</router-link>
  <router-link to="/login">点击我跳转登录</router-link>
  <router-view></router-view>
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
