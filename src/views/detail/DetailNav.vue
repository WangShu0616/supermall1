<template>
  <nav-bar>
    <div slot="left" class="left" @click="BackClick">
      <p class="back"></p>
    </div>
    <div slot="center" class="title">
      <div
        v-for="(item,index) in title"
        :key="item"
        class="title-item"
        :class="{active :currentIndex === index}"
        @click="titleClick(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNav",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    BackClick() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scopde>
.title {
  display: flex;
  font-size: 13px;
  color: #666;
}
.active {
  color: var(--color-high-text);
}
.title-item {
  flex: 1;
}
.back {
  width: 15px;
  height: 15px;
  border: 3px solid black;
  border-right: transparent;
  border-top: transparent;
  transform: rotate(45deg);
  margin-top: 15px;
  margin-left: 15px;
  text-align: center;
}
</style>