import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
process.env.MOCK && require('@/mock') //  引入mock模拟假数据
import vConsole from './util/vconsole.js' // 移动端debug-Vconsole
import './util/rem'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})