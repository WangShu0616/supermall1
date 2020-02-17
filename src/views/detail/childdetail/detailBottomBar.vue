<template>
  <div class="detail-bottom">
    <div class="bottom-left">
      <div>
        <div class="kfimg"></div>
        <p>客服</p>
      </div>
      <div>
        <div class="shops"></div>
        <p>购物车</p>
      </div>
      <div>
        <div class="shoucang"></div>
        <p>收藏</p>
      </div>
    </div>
    <div class="playshop">加入购物车</div>
    <div class="pay">立即购买</div>
  </div>
</template>
<script>
export default {
  name: "detailBottomBar"
};
</script>
<style scoped>
.detail-bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 41px;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
}
.bottom-left {
  display: flex;
  width: 180px;
  justify-content: space-between;
}
.bottom-left div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 13px;
  width: 60px;
}
.bottom-left div p {
  width: 100%;
  text-align: center;
}
.bottom-left div .kfimg {
  background: url(~assets/img/detail/detail_bottom.png) no-repeat;
  background-size: 26px;
  background-position: 0 -60px;
  width: 26px;
  height: 26px;
}
.bottom-left div .shops {
  background: url(~assets/img/detail/detail_bottom.png) no-repeat;
  background-size: 26px;
  background-position: 0 -115px;
  width: 26px;
  height: 26px;
}
.bottom-left div .shoucang {
  background: url(~assets/img/detail/detail_bottom.png) no-repeat;
  background-size: 26px;
  width: 26px;
  height: 26px;
}
.playshop {
  width: 100px;
  height: 35px;
  background: orange;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  line-height: 35px;
  text-align: right;
  padding-right: 7px;
  color: #fff;
}
.pay {
  width: 100px;
  height: 35px;
  background: red;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  line-height: 35px;
  text-align: left;
  padding-left: 7px;
  color: #fff;
}
</style>
