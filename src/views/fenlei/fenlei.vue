<template>
  <div>
    <swiper>
      <swiper-item>
        <img src="~assets/img/tabbar/分类.png" alt />
      </swiper-item>
      <swiper-item>
        <img src="~assets/img/tabbar/购物车.png" alt />
      </swiper-item>
      <swiper-item>
        <img src="~assets/img/tabbar/首页.png" alt />
      </swiper-item>
      <swiper-item>
        <img src="~assets/img/tabbar/我的.png" alt />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "fenlei",
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style>
.wapper {
  height: 150px;
  background: red;
  overflow: hidden;
  /* overflow: scroll; */
  /* color: black; */
}
</style>