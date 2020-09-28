import Vue from 'vue'
import Router from 'vue-router'
import startPhone from '../views/start'
import login from '../views/login'
import register from '../views/register'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'start',
            component: startPhone
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        // {
        //     path: '/register',
        //     component: () =>
        //         import ('views/register.vue'), //注册
        // },
    ]
})