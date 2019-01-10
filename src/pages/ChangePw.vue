<style scoped lang="less">
  .box-btn {
    padding: 10px 15px;
  }
</style>

<template>
  <div>
    <Group>
      <XInput title="输入密码：" placeholder="请输入当前密码" type="password" v-model="oldPw"/>
      <XInput title="新的密码：" placeholder="请输入新密码" type="password" v-model="newPw"/>
      <XInput title="确认密码：" placeholder="请确认新密码" type="password" v-model="ckPw"/>
    </Group>
    <div class="box-btn">
      <XButton @click.native="setPw" type="primary">确认修改</XButton>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton } from "vux";
import axios from 'axios'

export default {
  data: ()=> ({
    oldPw: '',
    newPw: '',
    ckPw: ''
  }),
  beforeCreate() {
    this.$store.commit("pageTitle", {
      title: "个人中心"
    })
  },
  methods: {
    setPw() {
      if(!this.oldPw) {
        this.$vux.toast.show({
          type: 'warn',
          text: '请输入当前密码'
        })
      } else if(!this.newPw) {
        this.$vux.toast.show({
          type: 'warn',
          text: '请输入新的密码'
        })
      } else if(!this.ckPw) {
        this.$vux.toast.show({
          type: 'warn',
          text: '请输入确认密码'
        })
      } else {
        const sePwUrl = `/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=teacher.xiumima&jiumima=${this.oldPw}&xinmima=${this.newPw}`
        axios({
          method: 'get',
          url: sePwUrl
        })
        .then(res => {
          if(res.data !== '') {
            let state = res.data.state
            console.log(state)
            if(state == 1) {
              this.$vux.toast.show({
                type: 'success',
                text: '修改成功, 请重新登陆'
              })
              this.$store.commit("logout")
              this.$router.push({ path: "/login" })
            } else if(state == -1) {
              this.$vux.toast.show({
                type: 'warn',
                text: '修改失败,请检查当前密码是否正确'
              })
            }
          }
        })
      }
    }
  },
  components: {
    Group,
    XInput,
    XButton
  }
}
</script>