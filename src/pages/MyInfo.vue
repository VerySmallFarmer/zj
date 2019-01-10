<style scoped lang="less">
.cell-head-img {
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
      <Cell title="机构名称" :value="mechanism">
        <img slot="icon" src="../assets/icon/mechanism.svg" class="cell-head-img">
      </Cell>
      <Cell title="角色" :value="role">
        <img slot="icon" src="../assets/icon/role.svg" class="cell-head-img">
      </Cell>
      <Cell title="账号" :value="uid">
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
import { Group, Cell, XButton } from "vux"
import axios from 'axios'

export default {
  data: () => ({
    mechanism: '少儿早教中心',
    role: '...',
    uid: '...'
  }),
  beforeCreate() {
    this.$store.commit("pageTitle", {
      title: "个人中心"
    })
  },
  created() {
    const myInfoUrl = '/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=teacher.membershuju'
    axios({
      method: 'get',
      url: myInfoUrl
    })
    .then((res)=> {
      const userInfo = res.data && res.data.teacher || {}
      this.role = userInfo.biaoqian || this.role
      this.uid = userInfo.tel || this.uid
    })
  },
  methods: {
    logout() {
      this.$store.commit("logout")
      this.$router.push({ path: "/login" })
    }
  },
  components: {
    Group,
    Cell,
    XButton
  }
}
</script>