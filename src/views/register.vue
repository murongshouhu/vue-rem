<template>
  <div class="login">
    <mt-field
      class="but_sty"
      label="用户名"
      placeholder="请输入用户名"
      v-model="userName"
    ></mt-field>
    <mt-field
      class="but_sty"
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="password"
    ></mt-field>
    <mt-button class="but_sty bh" type="primary" @click="register()"
      >登录</mt-button
    >
  </div>
</template>

<script>
import bus from "../util/bus";
import { setTimeout } from "timers";
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  computed: {
    regData() {
      return bus.regData;
    }
  },
  created() {
    let loginData = bus.regData;
    console.log("接收到值");
    console.log(loginData);
    this.userName = loginData.userName;
    this.password = loginData.password;
  },
  methods: {
    queryInfo() {},
    register() {
      if (this.userName && this.password) {
        let params = {
          userName: this.userName,
          password: this.password
        };
        bus.$emit("loginInfo", params);
        this.$router.push("/start");
        Toast({
          message: "登录成功",
          position: "bottom",
          duration: 500
        });
      } else {
        MessageBox({
          title: "提示",
          message: "账号密码不能为空",
          showCancelButton: true
        });
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.but_sty {
  width: 3.75rem;
}
.bh {
  height: 0.46rem;
  margin-top: 0.1rem;
}
</style>
