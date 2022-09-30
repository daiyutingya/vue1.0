import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";

Vue.use(Router);

// 默认不需要权限
export const constantRouterMap = [ 
  {
  path:"",
  redirect: "/index/index",
  hidden: true,
},{
  path:"/index",
  redirect: "/index/index",
  hidden: true,
},
{
  path: "/404",
  hidden:true,
  component: () => import("@/view/errorPage/404")
},
{
  path: "/login",
  name: "login",
  component: () => import("@/view/login"),
  hidden: true,
},
{
  path: "/401",
  hidden:true,
  component: () => import("@/view/errorPage/401")
},
  {
    path: "/index",
    name: "index",
    noDropdown: true,
    component: Layout,
    meta: {
      title: "首页",
      icon: "el-icon-delete",
    },
    children: [
      {
        path: "index",
        meta: {
          title: "首页",
          icon: "el-icon-delete",
          routerType:'leftmenu'
        },
        component: () => import("@/view")
      }
    ]
  },
 
];
export default new Router({
  base: "/permission/",
  routes: constantRouterMap
});
export const asyncRouterMap = [
  {
    path: "/user",
    name: "user",
    component: Layout,
    meta: {
      title: "个人中心",
      icon: "el-icon-delete"
    },
    noDropdown: false,
    children: [
      {
        path: "pwd",
        name: "pwd",
        meta: {
          title: "密码",
          icon: "el-icon-delete",
          routerType:'leftMenu'
        },
        component: () => import("@/view/user/pwd")
      },
      {
        path: "modify",
        name: "modify",
        meta: {
          title: "修改信息",
          icon: "el-icon-delete",
          routerType:'leftMenu'
        },
        component: () => import("@/view/user/modify")
      }
    ]
  }
];
