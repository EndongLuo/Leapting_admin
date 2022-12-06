<template>
    <el-container>
      <!-- 左边菜单 -->
      <el-aside width="collapse">
          
        <el-menu class="el-menu-vertical" :collapse="isCollapse">
          <div class="logo">
              <img src="@/assets/logo.png" alt="logo">
          </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
  
      <el-container>
        <!-- 头部 -->
        <el-header>
          <div class="collapse-btn">
            <!-- 点击展开收起导航和切换对应图标 -->
            <i class="el-icon-s-fold" @click="isC" v-show="block"></i>
            <i class="el-icon-s-unfold" @click="isC" v-show="toggle"></i>
          </div>
        </el-header>
        <!-- 主要内容-路由组件 -->
        <el-main>
          <test />
        </el-main>
        <!-- 页脚 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </template>
  
  <script>
  import test from "../test";
  export default {
    name: "layout",
    components: { test },
    data() {
      return {
        isCollapse: false, //导航栏默认为展开
        toggle: false, //第二个图标默认隐藏
        block: true, //默认显示第一个图标
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      isC() {
        this.isCollapse = !this.isCollapse;
        this.toggle = !this.toggle;
        this.block = !this.block;
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  .logo{
      // width: 199px;
      // height: 60px;
      // img{
      //     width: 100%;
      //     height: 100%;
      // }
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  //   min-height: 400px;
    height: 100vh;
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    height: 5vh;
  }
  .collapse-btn {
    margin-top: 0.2rem;
    font-size: 0.5rem;
  }
  .el-aside {
    background-color: #d3dce6;
    height: 100vh;
    color: #333;
    text-align: center;
    background-color: #fff;
  }
  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 2.5rem;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 16.25rem;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 20rem;
  }
  </style>