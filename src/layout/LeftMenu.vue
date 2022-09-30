<template>
  <div :style="{ width: sidebar.width + 'px' }">
    <div class="menu_page_top rflex">
      <img
        :class="['logo', { closeLogo: !sidebar.open }]"
        :src="logo"
        alt="xxxx"
      />
      <span class="title" v-show="sidebar.open">xx<i>西西</i></span>
    </div>
    <div class="menu_center">

      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :background-color="menuObj.bgColor"
        :text-color="menuObj.textColor"
        :active-text-color="menuObj.activeTextColor"
        :style="{ width: sidebar.width + 'px' }"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <template v-for="(item, index) in permission_routers">
          <router-link
            v-if="item.noDropdown && !item.hidden"
            :to="item.path + '/' + item.children[0].path"
            :key="index"
          >
            <el-menu-item :index="item.path + '/' + item.children[0].path">
              <i :class="item.meta.icon"></i>
              <span slot="title"> {{ item.meta.title }}</span>
            </el-menu-item>
          </router-link>

          <el-submenu
            :index="item.path"
            v-if="
              item.children &&
              item.children.length >= 1 &&
              !item.noDropdown &&
              !item.hidden
            "
            :key="index"
          >
            <template slot="title">
                <i :class="item.meta.icon"></i>
              <span v-if="item.meta.title" slot="title">{{
                item.meta.title
              }}</span>
            </template>
            <router-link
              v-for="(citem, cindex) in item.children"
              :key="cindex"
              :to="handleMenu(item, citem, cindex)"
            >
              <el-menu-item
                v-if="citem.meta.routerType != 'topmenu' && citem.meta.title"
                :index="handleMenu(item, citem, cindex)"
              >
                <template slot="title">
                    <i :class="citem.meta.icon"></i>
                  <span v-if="citem.meta.title" slot="title">
                    {{ citem.meta.title }}</span
                  >
                </template>
              </el-menu-item>
            </router-link>
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import logoImg from "@/assets/img/logo.png";

export default {
  name: "left-menu",
  data() {
    return {
      logo: logoImg,
      menuObj: {
        bgColor: "#fff",
        textColor: "#666",
        activeTextColor: "#ff6428",
      },
    };
  },
  computed: {
    ...mapGetters(["sidebar", "isCollapse", "permission_routers"]),
  },
  watch: {
    isCollapse(v) {
      console.log(v, "vvvv");
    },
  },
  mounted() {
    console.log(this.isCollapse, "ddd");
  },
  methods: {
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleMenu(item, citem, cindex) {
      return citem.meta.titleList
        ? item.path + "/" + citem.path + "/" + citem.meta.titleList[0].path
        : item.path + "/" + citem.path;
    },
  },
};
</script>
<style lang="less" >
        @import '../assets/css/theme.less';

.menu_page_top {
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px 0px rgba(230, 224, 224, 0.5);
  background: @blueBGColor;
  .logo {
    height: 36px;
    width: 36px;
    vertical-align: middle;
    display: inline-block;
  }

  .closeLogo {
    width: 30px;
    height: 30px;
  }

  .title {
    font-size: 22px;

    i {
      color: #ff6c60;
    }
  }
}

.menu_center {
  box-shadow: 0px 2px 5px 0px rgba(230, 224, 224, 0.5);
  height: calc(100% - 60px);
}

.el-menu {
  border: 0 !important; //垂直时，去除右侧白边
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-width: 35px;
}
</style>
