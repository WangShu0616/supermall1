<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    fontColor: {
      type: String,
      default: "#1296db"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
      console.log(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.fontColor } : {};
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  width: 24px;
  vertical-align: middle;
  margin-top: 5px;
}
.tab-bar-item p {
  margin: 0;
  font-size: 15px;
}
.active {
  color: #1296db;
}
</style>