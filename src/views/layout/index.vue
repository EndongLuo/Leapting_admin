<template>
  <el-container>
    <!-- 左边菜单 -->
    <el-aside width="collapse">
      <el-menu class="el-menu-vertical" :collapse="isCollapse">
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
        <router-link to="/">
          <el-menu-item index="1">
            <i class="el-icon-house"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </router-link>
        <router-link to="/test">
          <el-menu-item index="2">
            <i class="el-icon-user"></i>
            <span slot="title">用户</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="3">
          <i class="el-icon-cpu"></i>
          <span slot="title">机器人</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-map-location"></i>
          <span slot="title">地图</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-document"></i>
          <span slot="title">日志</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 头部 -->
      <el-header>
        <div class="header_inner">
          <div class="collapse-btn">
          <!-- 点击展开收起导航和切换对应图标 -->
          <i class="el-icon-s-fold" @click="isC" v-show="block"></i>
          <i class="el-icon-s-unfold" @click="isC" v-show="toggle"></i>
        </div>
        <div class="fullscreen">
            <Fullscreen />
        </div>
        </div>
        
      </el-header>
      <!-- 主要内容-路由组件 -->
      <el-main>
        <router-view />
      </el-main>
      <!-- 页脚 -->
      <!-- <el-footer>Copyright © 2020-2022 leapting All Rights Reserved.</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
import test from "../test";
import Fullscreen from '@/components/Fullscreen'
export default {
  name: "layout",
  components: { test ,Fullscreen},
  data() {
    return {
      isCollapse: true, //导航栏默认为展开
      toggle: true, //第二个图标默认隐藏
      block: false, //默认显示第一个图标
    };
  },
  methods: {
    isC() {
      this.isCollapse = !this.isCollapse;
      this.toggle = !this.toggle;
      this.block = !this.block;
    },
  },
};
</script>

<style lang="less">
@media screen and (max-width: 768px) {
  .el-menu-vertical:not(.el-menu--collapse) {
    position: absolute;
    left: 0px;
  }
  .el-menu-vertical:is(.el-menu--collapse) {
    display: none;
  }
  .collapse-btn{
    position: absolute;
    right: 10px;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;z-index: 100;
  height: 100vh;
}
.el-menu-vertical:is(.el-menu--collapse) {
  height: 100vh;
  }
.logo {
  height: 60px;
  img {
    height: 100%;
  }
}

.el-header {
  border-bottom: #c2c2c2 solid 1px;
}
.el-footer {
  text-align: center;
  line-height: 60px;
}
.header_inner{
display: flex;
  justify-content: space-between;
  align-items: center;
}
.collapse-btn {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-top: 8px;
  font-size: 36px;
}
.fullscreen{
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 32px;
}
.el-aside {
  background-color: #d3dce6;
  height: 100vh;
  color: #333;
  background-color: #fff;
}

// .el-main {
// }

// body > .el-container {
// //   margin-bottom: 2.5rem;
// }

// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
// //   line-height: 16.25rem;
// }

// .el-container:nth-child(7) .el-aside {
// //   line-height: 20rem;
// }
</style>
