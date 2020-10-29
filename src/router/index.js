import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/index.vue'
import login from '../views/login/index.vue'
const routerHistory = createWebHistory()
const constantRoutes = [{
        path: '/login',
        component: login
    }, {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: home
    }
]


const router = createRouter({
    history: routerHistory,
    routes: constantRoutes
})
export default router