<template>
    <!--切换 全局 轴点  -->
  <div>
    <!-- <el-switch
  v-model="value"
  active-color="#2a427a"
  inactive-color="#4ab251"
  active-text="轴点"
  inactive-text="全局"
  >
</el-switch> -->

<el-switch
  v-model="ListDatavalue"
  active-color="#2a427a"
  inactive-color="#4ab251"
  active-text="全局"
  inactive-text="轴点"
>
</el-switch>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        ListDatavalue: true
      }
    }
  };
</script>

<style>
.el-switch__label * {
    line-height: 1;
    font-size: 12px;
    display: inline-block;
  }
 .el-switch__label {
    position: absolute;
    display: none;
    color: #fff !important;
    font-size: 12px !important;
  }
  /*打开时文字位置设置*/
.el-switch__label--right {
    z-index: 1;
   right: -4.5px;
  }
  /*关闭时文字位置设置*/
.el-switch__label--left {
    z-index: 1;
    left: 20px;
  }
  /*显示文字*/
.el-switch__label.is-active {
    display: block;
  }
   /*开关宽度*/
.el-switch .el-switch__core,
  .el-switch .el-switch__label {
    width: 50px !important;
  }

</style>