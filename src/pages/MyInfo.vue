<style scoped lang="less">
  .cell-head-img{
    width: 1.2em;
    vertical-align: text-bottom;
    margin-right: 6px;
  }
</style>

<template>
  <Group>
    <Cell title="机构名称" value="少儿健康机构" >
      <img slot="icon" src="../assets/icon/book.svg" class="cell-head-img" alt="">
    </Cell>
    <Cell title="角色" value="老师|顾问|教练" >
      <img slot="icon" src="../assets/icon/book.svg" class="cell-head-img" alt="">
    </Cell>
    <Cell title="账号" value="13333333333" >
      <img slot="icon" src="../assets/icon/book.svg" class="cell-head-img" alt="">
    </Cell>
    <Cell title="修改密码" value="********" is-link >
      <img slot="icon" src="../assets/icon/book.svg" class="cell-head-img" alt="">
    </Cell>
  </Group>
</template>

<script>
import { Group } from 'vux'
import { Cell } from 'vux'
export default {
    
  components: {
      Group,
      Cell
  }
};
</script>