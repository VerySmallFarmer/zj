<style scoped lang="less">
.container {
  padding: 20px;
  padding-top: 60px;
}
.box-logo {
  margin: 0 auto;
  width: 150px;
}
.logo {
  width: 100%;
  height: auto;
}
.title {
  text-align: center;
  color: #999;
}
.box-inp {
  margin: 0 auto;
  margin-top: 80px;
  max-width: 300px;
}
</style>

<template>
  <div class="container">
    <div class="box-logo">
      <img class="logo" src="./../assets/logo.png" alt>
    </div>
    <p class="title">早期教育行业SCRM系统</p>
    <div class="box-inp">
      <group>
        <x-input title="账号：" placeholder="请输入账号" />
        <x-input title="密码：" placeholder="请输入密码" type="password"/>
      </group>
      <XButton type="primary">登  录</XButton>
    </div>
  </div>
</template>

<script>
import { XInput } from "vux"
import { XButton } from 'vux'

export default {
  components: {
    XInput,
    XButton
  }
};
</script>