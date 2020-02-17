<template>
  <div class="good-list-item" @click="detailClick">
    <img :src="showImg" @load="ImgLoad" />
    <div class="goods-info">
      <p>{{goodsList.title}}</p>
      <span class="price">{{goodsList.price}}</span>
      <span class="collect">{{goodsList.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodHomeListItem",
  props: {
    goodsList: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImg() {
      return this.goodsList.image || this.goodsList.show.img;
    },
    shopIid() {
      return this.goodsList.iid || this.goodsList.shop_id;
    }
  },
  methods: {
    ImgLoad() {
      this.$bus.$emit("ItemImgLoad");
    },
    detailClick() {
      this.$router.push("/detail/" + this.shopIid);
    }
  }
};
</script>
<style>
.good-list-item {
  width: 48%;
}
.good-list-item img {
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--color-tint);
}
.good-list-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
  text-align: center;
}
.goods-info {
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>