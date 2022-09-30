<template>
    <section class="bread_nav">
       
        <span @click="handleLeftMenu" class="bars"> 
			<i class="el-icon-s-fold" :class="{isactive:changeBarDirection}" />
		</span>
     

    </section>

    
  </template>
  <script>
  import { mapGetters } from "vuex";

  export default {
    name: 'bread-nav',
    data(){
      return{
        changeBarDirection:false,
      
      }
    },
    computed:{
...mapGetters['isCollapse']
    },
    methods:{
      handleLeftMenu(){
        this.$store.dispatch("setLeftCollapse")
        this.$store.dispatch("handleLeftMenu")
        this.changeBarDirection=!this.changeBarDirection
       


      }
    }
  }
  </script>
    <style lang="less" scoped>
      .bread_nav{
        height: 40px;
        line-height: 40px;
        background-color: rgba(230, 224, 224, 0.877);
        text-align: center;
        vertical-align:middle;
        .bars{
			float: left;
            margin: 4px 10px;
			cursor: pointer;
			.isactive{
				-webkit-transform: rotate(90deg);
				transform: rotate(90deg);
				transition: .38s;
				-webkit-transform-origin: 50% 50%;
				transform-origin: 50% 50%;
			}
		}
		.breadcrumb{
			height: 30px;
			line-height: 30px;
			.breadbutton{
				float:left;
				margin:4px 5px 0 0;
				
			}
		}
      }
      </style>