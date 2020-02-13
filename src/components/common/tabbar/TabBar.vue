<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar"
};
</script>
<style>
.tab-bar {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 49px;
  box-shadow: 0px -1px 10px rgba(100, 100, 100, 0.1);
  background: #fff;
  z-index: 99;
}
</style>