<template>
  <div>
    <detail-nav></detail-nav>
    <detail-swiper :topImg="res"></detail-swiper>
  </div>
</template>
<script>
import detailSwiper from "./childdetail/childDetailSwiper";
import DetailNav from "./DetailNav";
import { getDetail } from "network/detail";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      res: []
    };
  },
  components: {
    DetailNav,
    detailSwiper
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      this.res = res.result.itemInfo.topImages;
    });
  },
  methods: {}
};
</script>
<style scoped>
</style>