<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.image" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Recommends",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 20px 0px;
  border-bottom: 10px solid #eee;
}
.recommends-item img {
  margin-bottom: 10px;
  width: 70px;
  height: 70px;
}
.recommends-item {
  flex: 1;
}
</style>