<style scoped lang="less">
  .cell-head-img{
    width: 24px;
    height: 24px;
    vertical-align: text-bottom;
    margin-right: 6px;
  }
  .box-btn {
    padding: 10px 15px;
  }
</style>

<template>
  <div>
    <Group>
      <Cell title="机构名称" value="少儿健康机构" >
        <img slot="icon" src="../assets/icon/mechanism.svg" class="cell-head-img">
      </Cell>
      <Cell title="角色" value="老师|顾问|教练" >
        <img slot="icon" src="../assets/icon/role.svg" class="cell-head-img">
      </Cell>
      <Cell title="账号" value="13333333333" >
        <img slot="icon" src="../assets/icon/userinfo.svg" class="cell-head-img">
      </Cell>
      <Cell title="修改密码" value="********" is-link link="/changepw">
        <img slot="icon" src="../assets/icon/password.svg" class="cell-head-img">
      </Cell>
    </Group>
    <div class="box-btn">
      <Group>
        <XButton @click.native="logout" type="warn">退出登录</XButton>
      </Group>
    </div>
  </div>
</template>

<script>
import {Group, Cell, XButton} from 'vux'
export default {
  beforeCreate() {
    this.$store.commit("pageTitle", {
      title: '个人中心'
    })
  },
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push({ path: '/login' })
    }
  },
  components: {
      Group,
      Cell,
      XButton
  }
}
</script>