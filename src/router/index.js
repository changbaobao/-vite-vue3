import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layout/index.vue'
import home from '../views/home/index.vue'
import user from '../views/user/index.vue'
import company from '../views/company/index.vue'
const routerHistory = createWebHistory()
const constantRoutes = [{
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
            path: '/home',
            component: home
        }]
    },
    {
        path: '/user',
        component: Layout,
        redirect: '/user/index',
        children: [{
            path: 'index',
            component: user
        }]
    },
    {
        path: '/company',
        component: Layout,
        redirect: '/company/index',
        children: [{
            path: 'index',
            component: company
        }]
    }
]


const router = createRouter({
    history: routerHistory,
    routes: constantRoutes
})
export default router