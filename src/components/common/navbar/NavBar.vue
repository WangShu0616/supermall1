<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: var(--color-tint);
}
.left,
.right {
  width: 60px;
  background: green;
}
.center {
  flex: 1;
  background: red;
}
</style>