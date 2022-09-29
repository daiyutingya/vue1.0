// 存放一些全局的组件
import Vue from 'vue'
import IconSvg from '@/components/IconSvg'
//全局注册icon-svg
Vue.component('svg-icon', IconSvg)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
console.log(requireAll(req))
