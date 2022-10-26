/*
 * @Descripttion: 
 * @version: 
 * @Author: DYT
 * @Date: 2022-09-28 10:52:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-26 15:59:25
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import ElementUI from 'element-ui'
import store from "@/store"
Vue.config.productionTip = false
Vue.use(ElementUI)

import('element-ui/lib/theme-chalk/index.css')

import './components/iconSvg' // iconSvg
import "./assets/css/common.less"
import "./assets/css/theme.less"

import '@/permission' // permission control

import '@/mockjs'; // mock数据

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
