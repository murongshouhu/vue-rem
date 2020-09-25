<template>
  <div class="foot_href">
    <div class="fbox">
      <div class="sb">
        <img class="simg" src="../../assets/imgs/home/foot_1.jpeg" />
        <span class="stxt">外卖</span>
      </div>
    </div>
    <div class="fbox">
      <div class="sb">
        <img class="simg" src="../../assets/imgs/home/search.png" />
        <span class="stxt">搜索</span>
      </div>
    </div>
    <div class="fbox">
      <div class="sb">
        <img class="simg" src="../../assets/imgs/home/logo.png" />
        <span class="stxt">订单</span>
      </div>
    </div>
    <div class="fbox">
      <div class="sb">
        <img class="simg" src="../../assets/imgs/home/logo.png" />
        <span class="stxt">我的</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.foot_href {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 -0.01667rem 0.02333rem rgba(0, 0, 0, 0.1);
  .fbox {
    width: 0.93rem;
    height: 0.46rem;
    text-align: center;
    .simg {
      width: 0.18rem;
      height: 0.18rem;
      margin: auto;
      display: block;
      margin-top: 0.07rem;
    }
    .stxt {
      width: 0.24rem;
      height: 0.17rem;
      font-size: 0.12rem;
    }
  }
}
</style>
