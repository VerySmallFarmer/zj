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
      <TabbarItem icon-class="analytics" :selected="this.$route.fullPath == '/data'" :link="router.data">
        <img slot="icon" src="./../assets/icon/data2.svg">
        <span class="icon" slot="label">数据</span>
      </TabbarItem>
      <TabbarItem
        icon-class="analytics"
        :selected="this.$route.fullPath == '/marketing'"
        :link="router.marketing"
      >
        <img slot="icon" src="./../assets/icon/data.svg">
        <span class="icon" slot="label">营销</span>
      </TabbarItem>
      <!-- <TabbarItem icon-class="analytics" :selected="this.$route.fullPath == '/tabbarItem'" link="/tabbarItem">
        <img slot="icon" src="./../assets/icon/moneybag.svg">
        <span class="icon" slot="label">销售</span>
      </TabbarItem>-->
      <TabbarItem
        icon-class="analytics"
        :selected="this.$route.fullPath == '/teaching'"
        :link="router.teaching"
      >
        <img slot="icon" src="./../assets/icon/book.svg">
        <span class="icon" slot="label">教务</span>
      </TabbarItem>
      <TabbarItem
        icon-class="analytics"
        :selected="this.$route.fullPath == '/myinfo'"
        :link="router.myinfo"
      >
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
import store from './../store/index'

export default {
  data: ()=> ({
      router: {
        data: {
          path: './data',
          replace: true
        },
        marketing: {
          path: './marketing',
          replace: true
        },
        teaching: {
          path: './teaching',
          replace: true
        },
        myinfo: {
          path: './myinfo',
          replace: true
        }
      }
  }),
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