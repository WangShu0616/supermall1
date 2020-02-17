<template>
  <div class="detail">
    <detail-nav ref="detailnav" @titleClick="titleClick"></detail-nav>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="getScroll">
      <detail-swiper :topImg="res" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :goods-info="goodsInfo" @imgLoad="imgLoad" />
      <detail-param-info :param-info="ParamInfo" ref="param" />
      <detail-comment-info :rate="rate" ref="comment" />
      <good-home-list :goods="recommend" ref="recommend"></good-home-list>
    </scroll>
    <detail-bottom-bar />
  </div>
</template>
<script>
import detailSwiper from "./childdetail/childDetailSwiper";
import DetailNav from "./DetailNav";
import {
  getDetail,
  Goods,
  Shop,
  ParamsInfo,
  getRecommend
} from "network/detail";
import detailBaseInfo from "./childdetail/detailBaseInfo";
import detailShopInfo from "./childdetail/detailShopInfo";
import Scroll from "components/common/scroll/scroll";
import detailGoodsInfo from "./childdetail/detailGoodsInfo";
import detailParamInfo from "./childdetail/detailParamInfo";
import detailCommentInfo from "./childdetail/detailCommentInfo";
import GoodHomeList from "components/content/goodhomelist/GoodHomeList";
import { ItemListenerMixin } from "common/mixin";
import detailBottomBar from "./childdetail/detailBottomBar";
export default {
  name: "detail",
  mixins: [ItemListenerMixin],
  data() {
    return {
      iid: null,
      res: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      ParamInfo: {},
      rate: {},
      recommend: [],
      titleScroll: [0]
    };
  },
  components: {
    DetailNav,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    Scroll,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    GoodHomeList,
    detailBottomBar
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const detailGoods = res.result;

      this.res = detailGoods.itemInfo.topImages;
      // 获取轮播图等信息
      this.goods = new Goods(
        detailGoods.itemInfo,
        detailGoods.columns,
        detailGoods.shopInfo.services
      );
      // 获取店铺数据
      this.shop = new Shop(detailGoods.shopInfo);
      // 获取商品图片信息
      this.goodsInfo = detailGoods.detailInfo;
      // 获取商品参数
      this.ParamInfo = new ParamsInfo(
        detailGoods.itemParams.info,
        detailGoods.itemParams.rule
      );
      // 获取评论数据
      if (detailGoods.rate.cRate !== 0) {
        this.rate = detailGoods.rate.list[0];
      }
    });
    // 获取推荐数据
    getRecommend().then(res => {
      this.recommend = res.data.list;
    });
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    },
    getScroll(position) {
      if (-position.y <= this.$refs.param.$el.offsetTop) {
        this.$refs.detailnav.currentIndex = 0;
      }
      if (-position.y >= this.$refs.param.$el.offsetTop) {
        this.$refs.detailnav.currentIndex = 1;
      }
      if (-position.y >= this.$refs.comment.$el.offsetTop) {
        this.$refs.detailnav.currentIndex = 2;
      }
      if (-position.y >= this.$refs.recommend.$el.offsetTop) {
        this.$refs.detailnav.currentIndex = 3;
      }
    },
    titleClick(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollscrollToElement(
            this.$refs.detailnav.$el,
            200,
            true,
            false
          );
          break;
        case 1:
          this.$refs.scroll.scrollToElement(
            this.$refs.param.$el,
            200,
            true,
            false
          );
          break;
        case 2:
          this.$refs.scroll.scrollToElement(
            this.$refs.comment.$el,
            200,
            true,
            false
          );
          break;
        case 3:
          this.$refs.scroll.scrollToElement(
            this.$refs.recommend.$el,
            200,
            true,
            false
          );
      }
    }
  }
};
</script>
<style scoped>
.detail {
  position: relative;
  z-index: 199;
  background: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 42px);
  overflow: hidden;
}
.detail-nav {
  position: relative;
  top: 0;
  z-index: 29;
}
</style>