<template>
  <div></div>  
</template>
<script>
export default {
  beforeCreate() {
    this.$store.commit("pageTitle", {
      title: '教务'
    })
  }
}
</script>
