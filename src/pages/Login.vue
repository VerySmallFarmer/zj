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
      <Group>
        <XInput v-model="uid" title="账号：" placeholder="请输入账号"/>
        <XInput v-model="pw" title="密码：" placeholder="请输入密码" type="password"/>
      </Group>
      <XButton @click.native="login" type="primary">登 录</XButton>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Group, XInput, XButton } from "vux";
import { ToastPlugin } from "vux";

export default {
  data: () => ({
    uid: "",
    pw: ""
  }),
  methods: {
    login: function() {
      const loginUrl = `/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=teacher.loginshuju&tel=${
        this.uid
      }&pwd=${this.pw}`;
      axios({
        method: "get",
        url: loginUrl
      }).then(res => {
        const token = res.data.token;
        if (this.uid === "") {
          this.$vux.toast.show({
            type: "warn",
            text: "请输入账号"
          });
        } else if (this.pw === "") {
          this.$vux.toast.show({
            type: "warn",
            text: "请输入密码"
          });
        } else {
          if (token === 0) {
            this.$vux.toast.show({
              type: "warn",
              text: "账号或密码错误"
            });
          } else {
            
          }
        }
      })
      .catch((err) => {
        this.$vux.toast.show({
          type: "warn",
          text: "网络异常"
        });
      })
    }
  },
  components: {
    XInput,
    XButton,
    Group
  }
};
</script>