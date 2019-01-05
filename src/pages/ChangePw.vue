<style scoped lang="less">
  .box-btn {
    padding: 10px 15px;
  }
</style>

<template>
  <div>
    <Group>
      <XInput title="新的密码：" placeholder="请输入新密码" type="password"/>
      <XInput title="确认密码：" placeholder="请输入新密码" type="password"/>
    </Group>
    <div class="box-btn">
      <XButton @click.native="login" type="primary">确认修改</XButton>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton } from "vux";
export default {
  beforeCreate() {
    this.$store.commit("pageTitle", {
      title: "个人中心"
    });
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ path: "/login" });
    }
  },
  components: {
    Group,
    XInput,
    XButton
  }
}
</script>