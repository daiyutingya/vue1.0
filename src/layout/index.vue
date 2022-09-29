<template>
  <div class="home rflex">
    <left-menu/>
    <div class="home_center wflex cflex">
      <head-nav />
      <router-view  class="wflex"/>
      <foot-nav />
    </div>
  </div>
</template>
<script>
import FootNav from "@/layout/FootNav.vue"
import HeadNav from "@/layout/HeadNav.vue"
import LeftMenu from "@/layout/LeftMenu.vue"

export default {
  name: 'layout-home',
  data() {
    return {

    }
  },

  components: {
    FootNav, HeadNav, LeftMenu
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%; 
}
</style>