<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" :title="item.title" @load="HomeSwiperLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    HomeSwiperLoad() {
      if (!this.isShow) {
        this.$emit("HomeSwiperLoad");
      }
      this.isShow = true;
    }
  }
};
</script>