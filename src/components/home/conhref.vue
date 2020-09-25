<template>
  <div class="con_href">
    <div class="all">
      <div class="le">
        <img class="le_img" src="../../assets/imgs/home/con_1.jpg" />
      </div>
      <div class="rg">
        <div class="rg_t">
          <div class="ll">
            <span class="t1">品牌</span>
            <span class="t2">效果演示</span>
          </div>
          <div class="rr">
            <span class="t3">
              <span class="bb">保</span>
              <span class="bb">准</span>
              <span class="bb">票</span>
            </span>
          </div>
        </div>
        <div class="rg_c">
          <div class="cl">
            <span class="re">4.7</span>
            <span>月售<span>106</span>单</span>
          </div>
          <div class="cr">
            <span class="crt">蜂鸟专送</span>
            <span class="crb">准时达</span>
          </div>
        </div>
        <div class="rg_b">
          <div class="bl">￥<span>20</span>起送/配送费约￥<span>5</span></div>
          <div class="br">
            <span>1397.5</span>公里/<span class="tg">14小时54分钟</span>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "con-href",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.con_href {
  width: 3.75rem;
  height: 1.08rem;
  padding: 0.16rem 0.09rem;
  border-bottom: 0.01rem solid #f1f1f1;
  .all {
    display: flex;
    flex-direction: row;
    .le {
      width: 0.72rem;
      height: 0.74rem;
      .le_img {
        width: 0.63rem;
        height: 0.63rem;
        margin-right: 0.09rem;
      }
    }
    .rg {
      width: 2.83rem;
      height: 0.74rem;
      .rg_t {
        height: 0.19rem;
        display: flex;
        flex-direction: row;
        position: relative;
        z-index: 0;
        .ll {
          width: 1.99rem;
          height: 0.16rem;
          .t1 {
            width: 0.28rem;
            height: 0.14rem;
            line-height: 0.14rem;
            color: #333;
            background-color: #ffd930;
            padding: 0 0.02rem;
            border-radius: 0.02rem;
            margin-right: 0.04rem;
            font-size: 0.12rem;
            font-weight: 800;
          }
          .t2 {
            font-size: 0.15rem;
            color: #333;
            font-weight: 800;
          }
        }
        .rr {
          position: absolute;
          z-index: 0;
          right: 0;
          .bb {
            border: 0.01rem solid #f1f1f1;
            border-radius: 0.03rem;
          }
          .t3 {
            width: 0.41rem;
            height: 0.15rem;
            font-size: 0.12rem;
            color: #999;
          }
        }
      }
      .rg_c {
        position: relative;
        z-index: 0;
        display: flex;
        flex-direction: row;
        font-size: 0.12rem;
        margin-top: 0.12rem;
        .re {
          color: #ff6000;
        }
        .cr {
          position: absolute;
          right: 0;
          .crt {
            width: 0.48rem;
            height: 0.17rem;
            color: #fff;
            background-color: #3190e8;
            border: 0.01rem solid #3190e8;
            right: -0.025rem;
            position: relative;
            z-index: 0;
            border-radius: 0.018rem;
          }
          .crb {
            width: 0.36rem;
            height: 0.17rem;
            color: #3190e8;
            border: 0.01rem solid #3190e8;
            border-radius: 0.018rem;
          }
        }
      }
      .rg_b {
        font-size: 0.12rem;
        height: 0.17rem;
        display: flex;
        flex-direction: row;
        margin-top: 0.12rem;
        position: relative;
        z-index: 0;
        .bl {
          position: absolute;
          z-index: 0;
          left: 0;
        }
        .br {
          position: absolute;
          z-index: 0;
          right: 0;
          .tg {
            color: #3190e8;
          }
        }
      }
    }
  }
}
</style>
