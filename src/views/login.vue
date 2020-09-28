<template>
  <div class="login">
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      v-model="search.userName"
    ></mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="search.password"
    ></mt-field>
    <mt-field
      label="手机号"
      placeholder="请输入手机号"
      type="tel"
      v-model="search.phone"
    ></mt-field>
    <mt-button type="primary" @click="register()">登录</mt-button>
  </div>
</template>

<script>
import bus from "../util/bus";
export default {
  // 接收组件  在created周期函数中初始化接收数据
  // 接收名称 要和传递过来取得名字要一样
  created() {
    bus.$on("userName", val => {
      console.log("接收BUS传递过来的账号密码");
      console.log(val);
      this.search.userName = val.userName;
      this.search.password = val.password;
      this.search.phone = val.phone;
    });
  },
  data() {
    return {
      search: {
        userName: "",
        password: "",
        phone: ""
      }
    };
  },
  methods: {
    register() {
      this.$router.push("/start");
    }
  }
};
</script>
