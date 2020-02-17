<template>
  <div class="detail-base" v-if="Object.keys(goods).length !== 0">
    <div class="detail-title">{{goods.title}}</div>
    <div class="detail-price">
      <span class="detail-newprice">{{goods.newPrice}}</span>
      <span class="detail-oldprice">{{goods.oldPrice}}</span>
      <span class="detail-discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="info-service">
      <div v-for="index in goods.services.length-1" :key="index" class="info-service-item">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailBaseInfo",
  props: {
    goods: {
      type: Object
    }
  }
};
</script>
<style scoped>
.detail-base {
  padding: 10px 10px;
}
.detail-price {
  margin-top: 14px;
}
.detail-newprice {
  font-size: 24px;
  color: var(--color-high-text);
}
.detail-oldprice {
  font-size: 15px;
  color: #a8a5a5;
  text-decoration: line-through;
  margin-left: 4px;
}
.detail-discount {
  padding: 4px 6px;
  border-radius: 8px;
  background-color: var(--color-tint);
  margin-left: 4px;
  font-size: 11px;
  color: #fff;
  position: relative;
  top: -7px;
}
.info-other {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.info-service {
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}

.info-service-item img {
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
}

.info-service-item span {
  font-size: 13px;
  margin-left: 5px;
  color: #333333;
}
</style>