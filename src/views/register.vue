<template>
  <div class="login">
    <input type="text" v-model="search.userName" />
    <input type="passport" v-model="search.password" />
    <input type="text" v-model="search.phone" />
    <button @click="submit()">注册</button>
  </div>
</template>

<script>
import bus from "../util/bus";
export default {
  created() {},
  data() {
    return {
      search: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      // 用全局时间主线 event bus 进行数据传递
      // 传递数据方--在传递组件中定义方法传递数据
      bus.$emit("userName", this.search);
    }
  }
};
</script>
