<template>
  <div>
    <header class="head_nav">
      <div class="top_menu"></div>
      <div class="userinfo-right rflex">
        <div class="userinfo">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-submenu index="1" popper-class="langItem">
              <template slot="title">
                <img :src="logo" class="langAvatar" alt="" />
              </template>
              <el-menu-item index="1-1" @click="changeLocale('zh')">
                <!-- <img :src="avatar" class="langAvatar" alt="" /> -->
                <span class="intro">中文</span>
              </el-menu-item>
              <el-menu-item index="1-2" @click="changeLocale('en')">
                <!-- <img :src="avatar" class="langAvatar" alt="" /> -->
                <span class="intro">EngList</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="2" popper-class="infoItem">
              <template slot="title">
                <div class="welcome">
                  <span class="name">hello,</span>
                  <span class="name avatarname"> 112</span>
                </div>
                <img :src="avatar" class="avatar" alt="" />
              </template>
              <el-menu-item index="2-1" @click="setDialogInfo('info')"
                >基本信息</el-menu-item
              >
              <el-menu-item index="2-2" @click="setDialogInfo('pass')"
                >修改信息</el-menu-item
              >
              <el-menu-item index="2-3" @click="setDialogInfo('logout')"
                >退出登录</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </header>
    <bread />
  </div>
</template>
  <script>
import { mapGetters } from "vuex";
import logoImg from "@/assets/img/logo.png";
import chinaImg from "@/assets/img/china.svg";
import americaImg from "@/assets/img/america.svg";
import bread from "./bread.vue";
export default {
  name: "head-nav",
  data() {
    return {
      logo: logoImg,
      langLogo: americaImg,
      chinaImg: chinaImg,
      americaImg: americaImg,
      // avatar:avatar
    };
  },
  components: { bread },
  computed: {
    ...mapGetters(["name", "avatar", "sidebar"]),
  },
  methods: {
    logout(){
                  this.$store.dispatch('LogOut').then(() => {
                      location.reload();
                  })
              },
             /**
             * 弹出框-修改密码或者系统设置   
             * @param {string} cmditem 弹框类型
             */
            setDialogInfo(cmditem) {
                switch (cmditem) {
                    case 'info':
                        this.$router.push('/user/modify');
                        break;
                    case 'pass':
                        this.$router.push('/user/pwd');
                        break;
                    case 'logout':
                        this.logout();
                        break;
                }
            },
    changeLocale() {},
  },
};
</script>
    <style lang="less" scoped>

.head_nav {
  height: 60px;
  line-height: 60px;
  background: #fff;
  text-align: center;
  vertical-align: middle;
  display: flex;
  flex: 1;

  padding-right: 15px;
  justify-content: space-between;
  box-shadow: 0px 2px 5px 0px rgba(237, 233, 233, 0.5);
  .userinfo-right {
    width: 320px;
    padding: 0 10px;
    justify-content: space-between;
  }
  .userinfo {
    line-height: 60px;
    text-align: right;
  }
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
  }
  .langAvatar,
  li img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
  }
  .welcome {
    display: inline-block;
    vertical-align: middle;
    padding: 0 5px;
    .name {
      line-height: 20px;
      text-align: center;
      font-size: 12px;
    }
    .avatarname {
      color: #a9d86e;
      font-weight: bolder;
      font-size: 13px;
    }
  }

  .username {
    cursor: pointer;
    margin-right: 5px;
  }
  .border {
    border: 1px solid;
  }
  .notify-row {
    line-height: 60px;
    flex: 1;
    ul {
      display: flex;
      justify-content: space-around;
    }
  }
}
.el-submenu.is-active .el-submenu__title {
  border: unset;
}
</style>