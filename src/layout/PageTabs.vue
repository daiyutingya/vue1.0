<!--
 * @Descripttion: 
 * @version: 
 * @Author: DYT
 * @Date: 2022-10-25 10:22:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-26 17:32:28
-->

<template>
  <div class="bread rflex">
      <el-button size="mini" icon="el-icon-caret-left"></el-button>
      <div class="page_tabs wflex">
      </div>
      <el-button size="mini" icon="el-icon-caret-right" class="btn_unrightborder"></el-button>
      <el-button size="mini" icon="el-icon-refresh">刷新</el-button>
  
  </div>
  </template>
  
  <script>
  export default {
      name: 'PageTabs',
  
  }
  </script>
  
  <style lang="less" scoped>
  .bread {
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
  
      overflow:hidden .page_tabs {
          margin-left: 30px;
          width: 100000px;
          height: 40px;
          line-height: 40px;
          overflow: hidden;
  
      }
      button{
          outline: unset;
          border-bottom: none;
          margin-left: 0;
      }
      .btn_unrightborder{
          border-right: none;
      }
  
  }
  </style>
  