<style scoped lang="less">
  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .body {
    flex-grow: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>

<template>
  <div class="main">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>

export default {
  beforeCreate() {
    this.$store.commit("pageTitle", {
      title: '个人中心'
    })
  }
}
</script>