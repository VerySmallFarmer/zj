<style scoped lang="less">
  .box-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
  .icon {
    width: 24px;
    height: 24px;
  }
</style>
<template>
  <Group>
    <Cell title="安排体验" value="今日0人次" is-link>
      <div class="box-icon" slot="icon" :style="{backgroundColor: '#0c9'}">
        <img class="icon" src="../assets/icon/arrange.svg">
      </div>
    </Cell>
    <Cell title="排课管理" value="本周8节课" is-link>
      <div class="box-icon" slot="icon" :style="{backgroundColor: '#45abff'}">
        <img class="icon" src="../assets/icon/curriculum.svg">
      </div>
    </Cell>
    <Cell title="约课记录" value="本周43人次" is-link>
      <div class="box-icon" slot="icon" :style="{backgroundColor: '#ff6000'}">
        <img class="icon" src="../assets/icon/makean.svg">
      </div>
    </Cell>
    <Cell title="评课记录" value="本周880人次" is-link>
      <div class="box-icon" slot="icon" :style="{backgroundColor: '#9c27b0'}">
        <img class="icon" src="../assets/icon/comment.svg">
      </div>
    </Cell>
    <Cell title="活动报名" value="本月0人次" is-link>
      <div class="box-icon" slot="icon" :style="{backgroundColor: '#02c5d1'}">
        <img class="icon" src="../assets/icon/activity.svg">
      </div>
    </Cell>
  </Group>
</template>
<script>
import { Group } from 'vux'
import { Cell } from 'vux'

export default {

  beforeCreate() {
    this.$store.commit("pageTitle", {
      title: '教务'
    })
  },
  components: {
    Group,
    Cell
  }
}
</script>
