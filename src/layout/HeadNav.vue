<template>
    <header class="head_nav">
      <el-button type="primary" round @click="handleLeftMenu">主要按钮</el-button>    
      <!-- <icon-svg icon-class="iconmenu-fold" :class="{isactive:changeBarDirection}" /> -->

    <h1 :class="{isactive:changeBarDirection}">dddddd</h1>
    </header>
  </template>
  <script>
  import { mapGetters } from "vuex";

  export default {
    name: 'head-nav',
    data(){
      return{
        changeBarDirection:false
      }
    },
    computed:{
...mapGetters['isCollapse']
    },
    methods:{
      handleLeftMenu(){
        this.$store.dispatch("setLeftCollapse")
        this.$store.dispatch("handleLeftMenu")
        console.log(this.isCollapse,'123')
       
        console.log(this.$store,'this.$storethis.$store')


      }
    }
  }
  </script>
    <style lang="less" scoped>
      .head_nav{
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        text-align: center;
        vertical-align:middle;
        box-shadow: 0px 2px 5px 0px rgba(230, 224, 224, 0.5);
      }
      </style>