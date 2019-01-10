<style scoped lang="less">
.container {
  padding: 10px 15px;
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
  margin-bottom: 20px;
  //max-width: 300px;
}
</style>

<template>
  <MainViewBox>
    <div class="container">
      <div class="box-logo">
        <img class="logo" src="./../assets/logo.png" alt>
      </div>
      <p class="title">早期教育行业SCRM系统</p>
      <div class="box-inp">
        <Group>
          <XInput v-model="uid" title="账号：" placeholder="请输入账号"/>
          <XInput v-model="pw" title="密码：" placeholder="请输入密码" type="password"/>
        </Group>
      </div>
      <XButton @click.native="login" type="primary" :show-loading="btnLoad" :disabled="btnLoad">登 录</XButton>
    </div>
  </MainViewBox>
</template>

<script>
import axios from "axios";
import MainViewBox from './../components/MainViewBox.vue'
import { Group, XInput, XButton } from "vux";

export default {
  data: () => ({
    uid: '',
    pw: '',
    btnLoad: false
  }),
  methods: {
    login: function() {
      const loginUrl = `/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=teacher.loginshuju&tel=${this.uid}&pwd=${this.pw}`;
      if (this.uid === '') {
            this.$vux.toast.show({
          type: 'warn',
          text: '请输入账号'
        })
      } else if (this.pw === '') {
        this.$vux.toast.show({
          type: 'warn',
          text: '请输入密码'
        })
      } else {
        this.btnLoad = true
        axios({
          method: 'get',
          url: loginUrl
        })
        .then(res => {
          const token = res.data.token;
          this.btnLoad = false
          if (token === 0) {
            this.$vux.toast.show({
              type: 'warn',
              text: '账号或密码错误'
            })
          } else {
            this.$store.commit('login', {
              token: res.data.token
            })
            this.$router.push({ path: '/data' })
          }
        })
        .catch(() => {
          this.btnLoad = false
          this.$vux.toast.show({
            type: 'warn',
            text: '网络异常'
          })
        })
      }
    }
  },
  components: {
    MainViewBox, 
    XInput,
    XButton,
    Group
  }
}
</script>