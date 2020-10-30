<template>
    <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <router-link to="/home">
           <span>首页</span>
          </router-link>
          
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/user">
           <span>用户</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/company">
           <span>公司</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="right-nav-item">
           <a-avatar shape="square" icon=""/></a-badge>
           超级管理员
        </div>
        
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
// import { MessageOutlined } from '@ant-design/icons-vue'
import { onMounted,provide,reactive,ref } from 'vue'
export default {
    name:'home',
     components: {
    //   MessageOutlined
    },
    data(){
        return {
            selectedKeys: ['1'],
            collapsed: false,
        }
    },
    setup(props,context){
       
    },
    methods:{
       
    }
}
</script>
<style scoped>
#components-layout-demo-custom-trigger {
    width: 100%;
    height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.right-nav-item {
  float: right;
  margin-right:30px;
}

</style>