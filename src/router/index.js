import Vue from 'vue'
import Router from 'vue-router'
import startPhone from '../views/start'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: startPhone
    }]
})