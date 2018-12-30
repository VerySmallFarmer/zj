<style scoped lang="less">
.icon {
  font-size: 1.2em;
}
</style>

<template>
  <div>
    <!-- 顶栏 -->
    <XHeader>{{pageTitle}}</XHeader>
    <!-- router渲染 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <Tabbar>
      <TabbarItem icon-class="analytics" link="/data">
        <img slot="icon" src="./../assets/icon/data2.svg">
        <span class="icon" slot="label">数据</span>
      </TabbarItem>
      <TabbarItem icon-class="analytics" link="/marketing">
        <img slot="icon" src="./../assets/icon/data.svg">
        <span class="icon" slot="label">营销</span>
      </TabbarItem>
      <!-- <TabbarItem icon-class="analytics" link="http://baidu.com">
        <img slot="icon" src="./../assets/icon/moneybag.svg">
        <span class="icon" slot="label">销售</span>
      </TabbarItem> -->
      <TabbarItem icon-class="analytics" link="/teaching">
        <img slot="icon" src="./../assets/icon/book.svg">
        <span class="icon" slot="label">教务</span>
      </TabbarItem>
      <TabbarItem icon-class="analytics" link="/myinfo">
        <img slot="icon" src="./../assets/icon/user.svg">
        <span class="icon" slot="label">我的</span>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Tabbar, TabbarItem } from "vux";
import { XHeader } from "vux";
import store from './../store/index'

export default {
  beforeRouteEnter(to, from, next) {
    const token = store.getters.token
    if(token) {
      next()
    } else {
      next({path: '/login'})
    }
	},
	computed: {
    ...mapState({
        pageTitle: 'pageTitle'
    })
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader
  }
};
</script>