<template>
  <div class="detail-goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc-middle">{{ goodsInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item,index) in goodsInfo.detailImage" :key="index">
      <div>{{item.key}}</div>
      <div v-for="(item,index) in item.list" :key="index" class="goods-image">
        <img :src="item" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      defalut() {
        return {};
      }
    }
  },
  data() {
    return {
      current: 0,
      detailImgs: 0
    };
  },
  methods: {
    imgLoad() {
      if (++this.current == this.detailImgs) {
        this.$emit("imgLoad");
      }
    }
  },
  watch: {
    goodsInfo() {
      this.detailImgs = this.goodsInfo.detailImage[0].list.length;
    }
  }
};
</script>
<style scoped>
.detail-goods-info {
  margin-top: 20px;
}
.start,
.end {
  width: 90px;
  height: 2px;
  background: #a3a3a5;
  position: relative;
}
.info-desc {
  padding: 0px 15px;
}
.start::before,
.end::after {
  width: 5px;
  height: 5px;
  background: #a3a3a5;
  position: absolute;
  bottom: 0;
  content: "";
}
.start {
  float: left;
}
.end::after {
  right: 0;
}
.end {
  float: right;
}
.desc-middle {
  font-size: 14px;
  padding: 15px 0;
}
.goods-image img {
  width: 100%;
}
</style>