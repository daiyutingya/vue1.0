<template>
<div>
    <header class="head_nav">
        <span @click="handleLeftMenu" class="bars">
            <i class="el-icon-s-fold" :class="{isactive:changeBarDirection}" />
        </span>
        <div class="userinfo-right right">
            <div class="userinfo">
                <span @click="setDialogInfo('logout')">退出登录</span>
            </div>
        </div>
    </header>
    <PageTabs />
</div>
</template>

  
<script>
import {
    mapGetters
} from "vuex";
import logoImg from "@/assets/img/logo.png";
import chinaImg from "@/assets/img/china.svg";
import americaImg from "@/assets/img/america.svg";
import PageTabs from "./PageTabs.vue";
export default {
    name: "head-nav",
    data() {
        return {
            logo: logoImg,
            langLogo: americaImg,
            chinaImg: chinaImg,
            americaImg: americaImg,
            changeBarDirection: false,

            // avatar:avatar
        };
    },
    components: {
      PageTabs
    },
    computed: {
        ...mapGetters(["name", "avatar", "sidebar", 'isCollapse']),
    },
    methods: {
      handleLeftMenu() {
            this.$store.dispatch("setLeftCollapse")
            this.$store.dispatch("handleLeftMenu")
            this.changeBarDirection = !this.changeBarDirection

        },
        logout() {
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
    height: 50px;
    line-height: 50px;
    background: #3c8dbc;
    ;
    text-align: center;
    vertical-align: middle;
    display: flex;
    flex: 1;

    padding-right: 15px;
    justify-content: space-between;
    box-shadow: 0px 2px 5px 0px rgba(237, 233, 233, 0.5);
    .bars {
        float: left;
        margin: 4px 18px;
        cursor: pointer;
        color: #fff;
        

        .isactive {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            transition: .38s;
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
        }
    }
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
