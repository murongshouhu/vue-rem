import Vue from "vue"
const bus = new Vue({
    data() {
        return {
            // 定义数据
            regData: {}, // 接收登录账号密码
            loginData: {}, // 首页接收用户名头像
        }
    },
    created() {
        // 绑定监听
        // 注册监听
        this.$on('regInfo', (val) => {
                this.regData = val
            })
            // 登录传值
        this.$on('loginInfo', (val) => {
            this.loginData = val
        })
    }
})
export default bus