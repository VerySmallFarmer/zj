<style scoped lang="less">
.icon {
  font-size: 1.2em;
}
.botbar {
  position: static;
}
</style>

<template>
  <MainViewBox>
    <!-- 顶栏 -->
    <XHeader slot="header">{{pageTitle}}</XHeader>
    <!-- router渲染 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <Tabbar slot="bottom" class="botbar">
      <TabbarItem icon-class="analytics" :selected="this.$route.fullPath == '/data'" link="/data">
        <img slot="icon" src="./../assets/icon/data2.svg">
        <span class="icon" slot="label">数据</span>
      </TabbarItem>
      <TabbarItem icon-class="analytics" :selected="this.$route.fullPath == '/marketing'" link="/marketing">
        <img slot="icon" src="./../assets/icon/data.svg">
        <span class="icon" slot="label">营销</span>
      </TabbarItem>
      <!-- <TabbarItem icon-class="analytics" :selected="this.$route.fullPath == '/tabbarItem'" link="/tabbarItem">
        <img slot="icon" src="./../assets/icon/moneybag.svg">
        <span class="icon" slot="label">销售</span>
      </TabbarItem> -->
      <TabbarItem icon-class="analytics" :selected="this.$route.fullPath == '/teaching'" link="/teaching">
        <img slot="icon" src="./../assets/icon/book.svg">
        <span class="icon" slot="label">教务</span>
      </TabbarItem>
      <TabbarItem icon-class="analytics" :selected="this.$route.fullPath == '/myinfo'" link="/myinfo">
        <img slot="icon" src="./../assets/icon/user.svg">
        <span class="icon" slot="label">我的</span>
      </TabbarItem>
    </Tabbar>
  </MainViewBox>
</template>

<script>
import MainViewBox from './../components/MainViewBox.vue'
import { mapState } from 'vuex'
import { Tabbar, TabbarItem } from 'vux'
import { XHeader } from 'vux'
import axios from 'axios'
import store from './../store/index'

export default {
  beforeCreate() {
    const myInfoUrl = `/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=teacher.membershuju&token=${this.$store.getters.token}`
    axios({
      method: 'get',
      url: myInfoUrl
    })
  },
  beforeRouteEnter(to, from, next) {
    const token = store.getters.token
    if(token) {
      next()
    } else {
      next({
        path: '/login',
        replace: true
      })
    }
	},
	computed: {
    ...mapState({
        pageTitle: 'pageTitle'
    })
  },
  components: {
    MainViewBox,
    Tabbar,
    TabbarItem,
    XHeader
  }
}
</script>