<template>
  <div class="home">
    <div class="head">
      <div class="he_left">
        <img class="img fl" src="../assets/imgs/home/search.png" />
      </div>
      <div class="he_tit"><span>复旦大学(邯郸校区)</span></div>
      <div class="he_rig fr cr">
        <!-- <span @click="switchLogin()">登录</span>/<span @click="switchReg()"
          >注册</span
        > -->
        <router-link to="/login">登录</router-link>
      </div>
    </div>
    <div class="nav">
      <div class="tp">
        <div class="smallbox">
          <nav-href></nav-href>
        </div>
        <div class="smallbox">
          <nav-href></nav-href>
        </div>
        <div class="smallbox">
          <nav-href></nav-href>
        </div>
        <div class="smallbox">
          <nav-href></nav-href>
        </div>
      </div>
      <div class="bo">
        <div class="smallbox">
          <nav-href></nav-href>
        </div>
        <div class="smallbox">
          <nav-href></nav-href>
        </div>
        <div class="smallbox">
          <nav-href></nav-href>
        </div>
        <div class="smallbox">
          <nav-href></nav-href>
        </div>
      </div>
    </div>
    <div class="con">
      <div class="con_he">
        <img class="con_icon" src="../assets/imgs/home/logo.png" />
        <span class="con_te">附近商家</span>
      </div>
      <div class="con_co">
        <con-href></con-href>
        <con-href></con-href>
        <con-href></con-href>
        <con-href></con-href>
        <con-href></con-href>
        <con-href></con-href>
        <con-href></con-href>
        <con-href></con-href>
        <con-href></con-href>
        <con-href></con-href>
      </div>
    </div>
    <div class="foot">
      <foot-href></foot-href>
    </div>
  </div>
</template>

<script>
import navHref from "../../src/components/home/navhref";
import conHref from "../../src/components/home/conhref";
import footHref from "../../src/components/home/foothref";

export default {
  components: {
    "nav-href": navHref,
    "con-href": conHref,
    "foot-href": footHref
  },
  data() {
    return {};
  },
  created() {
    // this.queryList();
  },
  methods: {
    // 请求数据列表
    queryList() {
      let self = this;
      //参数
      let params = this.$qs.stringify({
        id: "001"
      });

      //请求
      self.$axios
        .post("/start/startList", params)
        .then(response => {
          alert("获取数据成功");
          console.log(111);
          console.log(response);
          console.log(111);
        })
        .catch(error => {
          alert("获取数据失败");
          console.log(111);
          console.log(error);
          console.log(111);
        });
    },
    // 调到登录页面
    switchLogin() {
      location.href = "../views/login.vue";
    },
    switchReg() {
      location.href = "../views/register.vue";
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .head {
    background-color: #3190e8;
    width: 3.75rem;
    height: 0.46rem;
    position: fixed;
    z-index: 1;
    color: #fff;
    text-align: center;
    .he_left {
      height: 0.21rem;
      width: 0.21rem;
      position: absolute;
      margin-left: 0.15rem;
      margin-top: 0.15rem;
      .img {
        height: 100%;
      }
    }
    .he_tit {
      font-size: 0.18rem;
      margin-top: 0.13rem;
      text-align: center;
    }
    .he_rig {
      font-size: 0.15rem;
      position: absolute;
      right: 0.15rem;
      top: 0.15rem;
    }
  }
  .nav {
    width: 3.75rem;
    height: 2.54rem;
    padding-bottom: 0.14rem;
    padding-top: 0.46rem;
    display: flex;
    flex-direction: column;
    .tp,
    .bo {
      width: 100%;
      height: 50%;
      display: flex; // 父容器flex布局
      flex-wrap: nowrap; // 不换行
      .smallbox {
        height: 100%;
        width: 25%;
        padding: 0.07rem 0rem;
      }
    }
  }
  .con {
    width: 3.75rem;
    height: auto;
    margin-bottom: 0.5rem;
    border-top: 0.09rem solid #e4e4e4;
    .con_he {
      width: 100%;
      height: 0.39rem;
      line-height: 0.39rem;
      .con_icon {
        width: 0.14rem;
        height: 0.14rem;
        margin-left: 0.14rem;
      }
      .con_te {
        font-size: 0.13rem;
        color: #999;
      }
    }
    .con_co {
      width: 3.75rem;
      display: flex;
      flex-direction: column;
      //   background-color: #e4e4e4;
    }
  }
  .foot {
    width: 3.75rem;
    height: 0.46rem;
    position: fixed;
    z-index: 99;
    left: 0;
    bottom: 0;
    background: #fff; //避免透明，层级此时无效
  }
  .cr {
    cursor: pointer;
  }
  .rem_sty {
    width: 3.37rem;
    height: 1.56rem;
    margin-left: 0.17rem;
    margin-top: 0.4rem;
    text-align: center;
  }
}
</style>
