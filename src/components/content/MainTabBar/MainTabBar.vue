<template>
  <tab-bar>
    <tab-bar-item path="/home" fontColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/首页.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/首页_active.png" alt />
      <p slot="item-text">首页</p>
    </tab-bar-item>

    <tab-bar-item path="/fenlei" fontColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/分类.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/分类_active.png" alt />
      <p slot="item-text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" fontColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/购物车.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/购物车_active.png" alt />
      <p slot="item-text">购物车</p>
    </tab-bar-item>

    <tab-bar-item path="/profile" fontColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/我的.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/我的_active.png" alt />
      <p slot="item-text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style>
</style>