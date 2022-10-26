/*
 * @Descripttion: 
 * @version: 
 * @Author: DYT
 * @Date: 2022-09-28 10:52:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-26 17:29:51
 */
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
      icon: "el-icon-s-home",
    },
    children: [
      {
        path: "index",
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
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
      title: "管理系统",
      icon: "el-icon-s-order"
    },
    noDropdown: false,
    children: [
      {
        path: "pwd",
        name: "pwd",
        meta: {
          title: "模板管理",
          icon: "el-icon-s-order",
          routerType:'leftMenu'
        },
        component: () => import("@/view/user/pwd")
      },
      {
        path: "modify",
        name: "modify",
        meta: {
          title: "规格管理",
          icon: "el-icon-s-tools",
          routerType:'leftMenu'
        },
        component: () => import("@/view/user/modify")
      }
    ]
  },
  {
    path: "/sys",
    name: "sys",
    component: Layout,
    meta: {
      title: "应用系统",
      icon: "el-icon-s-order"
    },
    noDropdown: false,
    children: [
      {
        path: "pwd",
        name: "pwd",
        meta: {
          title: "MQC点检",
          icon: "el-icon-s-order",
          routerType:'leftMenu'
        },
        component: () => import("@/view/user/pwd")
      },
      {
        path: "modify",
        name: "modify",
        meta: {
          title: "MQC记录",
          icon: "el-icon-s-tools",
          routerType:'leftMenu'
        },
        component: () => import("@/view/user/modify")
      }
    ]
  }
];
