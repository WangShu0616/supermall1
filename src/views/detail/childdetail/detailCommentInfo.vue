<template>
  <div class="comment">
    <div class="comment-top">
      <span>用户评价</span>
      <span class="comment-more">
        更多
        <span class="arrow-right"></span>
      </span>
    </div>
    <div>
      <div class="user">
        <img :src="rate.user.avatar" class="avatar" ref="img" @load="ImgLoad" />
        <span class="username" ref="uname">{{rate.user.uname}}</span>
      </div>
      <div class="comment-content" ref="content">{{rate.content}}</div>
      <span class="created">{{rate.created | showDate}}</span>
      <span v-for="(item,index) in rate.style" :key="index" class="comment-style">{{item}}</span>
    </div>
  </div>
</template>
<script>
import { formatDate } from "common/utils";
export default {
  name: "detailcommentInfo",
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  methods: {
    ImgLoad() {
      // console.log(this.$refs.img);
      // console.log(this.$refs.uname);
      // console.log(this.$refs.content);
    }
  }
};
</script>
<style scoped>
.comment {
  padding: 20px 15px;
}
.comment-top {
  display: flex;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
}
.comment-more {
  margin-right: 5px;
}
.arrow-right {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 0;
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
  border-top: 0.02667rem solid #999;
  border-left: 0.02667rem solid #999;
  background-color: rgba(0, 0, 0, 0);
}
.user {
  height: 60px;
  line-height: 60px;
  display: flex;
  font-size: 15px;
  align-items: center;
}
.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 10px;
}
.comment-content {
  margin-left: 10px;
  font-size: 14px;
  margin-bottom: 5px;
  line-height: 24px;
}
.created {
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
}
.comment-style {
  font-size: 12px;
}
</style>