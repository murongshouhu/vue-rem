import Vue from 'vue'
import Router from 'vue-router'
import startPhone from '../views/start'
import login from '../views/login'
import register from '../views/register'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/', // '/' 项目运行默认显示页面
            name: 'login',
            component: login
        },
        {
            path: '/start', // '/+name' 与页面中路由跳转的名称相对应 this.$router.push('/+name')
            name: 'start',
            component: startPhone
        },

        {
            path: '/register',
            name: 'register',
            component: register
        },
    ]
})