<template>
  <div class="page">
    <div  @click="closePicker">
        <i class="el-icon-arrow-up"></i>
    </div>
    <transition name="picker">
      <div class="picker" v-show="showPicker">
        <p class="picker-item bottom_link">选项</p>
        <p class="picker-item bottom_link">选项</p>
        <p class="picker-item bottom_link">选项</p>
        <p class="picker-item bottom_link">选项</p>
        <p class="picker-item bottom_link">选项</p>
        <p class="picker-item bottom_link">选项</p>
        <p class="picker-item bottom_link">选项</p>
        <p class="picker-item bottom_link">选项</p>
        <p class="picker-item bottom_link">选项</p>
        <p class="picker-item bottom_link">选项</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPicker: false,
    };
  },
  methods: {
    closePicker() {
      this.showPicker = !this.showPicker;
    },
  },
};
</script>

<style>
.picker {
  height: 350px;
  background: #fff;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  /* z-index: 2020; */
  overflow-y: scroll;
  box-shadow: 0 0 12px 0 #f4f4f4;
}
.picker-item {
  font-size: 14px;
  padding: 15px;
  text-align: center;
}
/* 容器 高度进入和离开 的过渡动画 */
.picker-enter-active,
.picker-leave-active {
  transition: height 0.3s;
}
/* 定义进入过渡的开始状态 和 离开过渡的结束状态 */
.picker-enter,
.picker-leave-to {
  height: 0;
}
/* 定义进入过渡的结束状态 和 离开过渡的开始状态 */
.picker-enter-to,
.picker-leave {
  height: 300px;
}
</style>
