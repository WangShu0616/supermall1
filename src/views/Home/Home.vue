<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control
      :tabcontrol="['流行','新款','精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl2"
      v-show="isFixed"
      :class="{tabFixed:isFixed}"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners" @HomeSwiperLoad="HomeSwiperLoad" />
      <recommends :recommends="recommends" />
      <fulture />
      <tab-control
        :tabcontrol="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl1"
      />
      <good-home-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShow" />
  </div>
</template>
<script>
import HomeSwiper from "./ChildComponents/HomeSwiper";
import Recommends from "./ChildComponents/Recommends";
import fulture from "./ChildComponents/fulture";

import NavBar from "components/common/navbar/NavBar";
import tabControl from "components/content/tabcontrol/tabControl";
import GoodHomeList from "components/content/goodhomelist/GoodHomeList";
import scroll from "components/common/scroll/scroll";
import BackTop from "components/common/backtop/BackTop";
import { getHomeMultidata, getGoods } from "network/home";
import { debounce } from "common/debounce";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false,
      tabTop: 0,
      isFixed: false,
      scrollTop: 0
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
    fulture,
    tabControl,
    GoodHomeList,
    scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata();

    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);

    this.$bus.$on("ItemImgLoad", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.BackTop(0, this.scrollTop, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.scrollTop = this.$refs.scroll.getScrollTop();
  },
  beforeDestroy() {
    this.$bus.$off;
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    HomeSwiperLoad() {
      this.tabTop = this.$refs.tabControl1.$el.offsetTop;
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
    backTopClick() {
      this.$refs.scroll.BackTop(0, 0, 1000);
      console.log("----");
    },
    contentScroll(position) {
      this.isShow = -position.y > 1000;
      this.isFixed = -position.y > this.tabTop;
    },
    pullingUp() {
      this.getGoods(this.currentType);
    }
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabFixed {
  position: relative;
  z-index: 11;
  top: 0px;
  right: 0;
  left: 0;
}
</style>  