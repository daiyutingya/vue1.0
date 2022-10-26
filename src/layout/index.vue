<template>
  <div class="home rflex">
    <left-menu/>
    <div class="home_center wflex cflex">
      <head-nav />
      <router-view  class="wflex center" />
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
  .home_center{
    background-color: #f3f3f4;
    .center{
      margin: 10px 18px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 1px 1px 3px rgb(0 0 0 / 20%);
    }

  }
}
</style>