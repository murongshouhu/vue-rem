<template>
  <div class="nav_href">
    <div class="to_img">
      <img
        class="imgr"
        src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg"
      />
    </div>
    <div class="bo_text"><span class="to_text">甜品饮品</span></div>
  </div>
</template>
<script>
export default {
  name: "nav-href",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.nav_href {
  width: 0.52rem;
  height: 0.75rem;
  font-weight: 400;
  margin: auto;
  .to_img {
    text-align: center;
    .imgr {
      width: 0.42rem;
      height: 0.42rem;
      margin-bottom: 0.07rem;
    }
  }
  .bo_text {
    .to_text {
      display: inline;
      font-size: 0.13rem;
      color: #666;
      text-align: center;
    }
  }
}
</style>
