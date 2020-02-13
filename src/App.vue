<template>
  <div id="app">
    <main-tab-bar />
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>
<style>
@import "assets/css/base.css";
</style>
