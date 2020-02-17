<template>
  <swiper class="detail-swiper" v-if="topImg.length">
    <swiper-item v-for="item in topImg" :key="item">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "childDetailSwiper",
  data() {
    return {};
  },
  props: {
    topImg: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
.detail-swiper {
  height: 300px;
}
</style>