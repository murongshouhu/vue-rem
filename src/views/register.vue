<template>
  <div class="login">
    <input type="text" v-model="search.userName" />
    <input type="passport" v-model="search.password" />
    <input type="text" v-model="search.phone" />
    <button @click="register()">注册</button>
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
      console.log();
    }
  }
};
</script>
