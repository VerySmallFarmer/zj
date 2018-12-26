<style scoped lang="less">
	.icon {
		font-size: 1.2em;
	}
</style>

<template>
  <div>
		<!-- 顶栏 -->
		<XHeader>标题</XHeader>
		<!-- router渲染 -->
		<router-view></router-view>
		<!-- 底部导航 -->
		<Tabbar>
			<TabbarItem icon-class="analytics" link="http://baidu.com">
				<img slot="icon" src="./../assets/icon/data2.svg">
				<span class="icon" slot="label">数据</span>
			</TabbarItem>
			<TabbarItem icon-class="analytics" link="http://baidu.com">
				<img slot="icon" src="./../assets/icon/data.svg">
				<span class="icon" slot="label">营销</span>
			</TabbarItem>
			<TabbarItem icon-class="analytics" link="http://baidu.com">
				<img slot="icon" src="./../assets/icon/moneybag.svg">
				<span class="icon" slot="label">销售</span>
			</TabbarItem>
			<TabbarItem icon-class="analytics" link="http://baidu.com">
				<img slot="icon" src="./../assets/icon/book.svg">
				<span class="icon" slot="label">教务</span>
			</TabbarItem>
			<TabbarItem icon-class="analytics" link="http://baidu.com">
				<img slot="icon" src="./../assets/icon/user.svg">
				<span class="icon" slot="label">我的</span>
			</TabbarItem>
		</Tabbar>
	</div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import { XHeader } from 'vux'

export default {
    
  components: {
    Tabbar,
		TabbarItem,
		XHeader
  }
};
</script>