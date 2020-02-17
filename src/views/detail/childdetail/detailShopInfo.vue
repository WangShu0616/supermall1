<template>
  <div class="detail-shop">
    <div class="shop-name">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-left">
        <div class="sells">
          <span>{{shop.sells | sellCountFilter}}</span>
          <p>总销量</p>
        </div>
        <div class="baby">
          <span>{{shop.goodsCount}}</span>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-right">
        <ul>
          <li v-for="(item, index) in shop.score" :key="index">
            <span>{{item.name}}</span>
            <span>{{ item.score }}</span>
            <span
              class="better"
              :class="{'better-more':item.isBetter}"
            >{{ item.isBetter ? "高" : "低" }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="go-shop">
      <div>进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailShopInfo",
  props: {
    shop: {
      type: Object,
      defalut() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
.detail-shop {
  padding: 25px 8px;
}
.shop-name {
  height: 60px;
  display: flex;
  align-items: center;
}
.shop-name img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.shop-name span {
  margin-left: 10px;
  font-size: 14px;
}
.shop-middle {
  display: flex;
}
.shop-left {
  width: 50vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-left span {
  font-size: 20px;
}
.shop-left p {
  margin-top: 10px;
  font-size: 14px;
}
.shop-right {
  font-size: 14px;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop-right ul {
  width: 30vw;
}
.shop-right ul li {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  align-items: center;
}
.better {
  color: #fff;
  background: #5ea732;
  padding: 0px 3px;
  height: 20px;
  line-height: 20px;
}
.better-more {
  background: #f13e3a;
}
.go-shop {
  margin-top: 10px;
  text-align: center;
}

.go-shop div {
  font-size: 14px;
  line-height: 30px;
  display: inline-block;
  width: 150px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  background-color: #f2f5f8;
}
</style>