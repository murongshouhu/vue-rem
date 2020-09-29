<template>
  <div class="login">
    <mt-field
      class="but_sty"
      label="用户名"
      placeholder="请输入用户名"
      v-model="search.userName"
    ></mt-field>
    <mt-field
      class="but_sty"
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="search.password"
    ></mt-field>
    <mt-field
      class="but_sty"
      label="手机号"
      placeholder="请输入手机号"
      type="tel"
      v-model="search.phone"
    ></mt-field>
    <mt-button class="but_sty bh" type="primary" @click="register()"
      >注册</mt-button
    >
  </div>
</template>

<script>
import bus from "../util/bus";
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      search: {
        userName: "Leif",
        password: "123456",
        phone: "13530392050"
      }
    };
  },
  methods: {
    register() {
      // 跳转到登录页面
      if (!this.search.userName) {
        MessageBox({
          title: "提示",
          message: "请输入账号",
          showCancelButton: true
        });
        return;
      }
      if (!this.search.password) {
        MessageBox({
          title: "提示",
          message: "请输入密码",
          showCancelButton: true
        });
        return;
      }
      if (!this.search.phone) {
        MessageBox({
          title: "提示",
          message: "请输入手机号码",
          showCancelButton: true
        });
        return;
      }
      Toast({
        message: "注册成功",
        position: "bottom",
        duration: 500
      });
      // 用全局时间主线 event bus 进行数据传递
      // 传递数据方--在传递组件中定义方法传递数据
      bus.$emit("regInfo", this.search);
      this.$router.push("/register");
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
