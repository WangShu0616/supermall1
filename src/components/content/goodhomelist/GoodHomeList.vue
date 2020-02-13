<template>
  <div class="goods-list">
    <good-home-list-item v-for="item in goods" :key="item.image" :goods-list="item" />
  </div>
</template>
<script>
import GoodHomeListItem from "./GoodHomeListItem";
export default {
  name: "GoodHomeList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodHomeListItem
  }
};
</script>
<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 18px;
}
</style>