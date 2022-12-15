<template>
  <div class="maps">
    <Map_canvas />
    <ControlStation/>
    <div class="map_left">
      <div class="left_list">
        <div class="l_icon">
          <el-button icon="el-icon-discover" circle></el-button>
          <span>指南针</span>
        </div>
        <div class="l_icon">
          <el-button icon="el-icon-odometer" circle></el-button>
          <span>速码表</span>
        </div>
        <div class="l_icon">
          <el-button icon="el-icon-video-pause" circle></el-button>
          <span>暂停</span>
        </div>
        <div class="l_icon">
          <el-button
            icon="el-icon-warning-outline"
            type="danger"
            circle
          ></el-button>
          <span>急停</span>
        </div>
      </div>
    </div>
    <div class="map_right">
      <div class="left_list">
        <div class="l_icon">
          <el-button icon="el-icon-circle-plus" circle></el-button>
          <span>建图</span>
        </div>
        <div class="l_icon">
          <el-button icon="el-icon-search" circle></el-button>
          <span>操作</span>
        </div>
        <div class="l_icon">
          <el-button icon="el-icon-aim" circle></el-button>
          <span>定位</span>
        </div>
        <div class="l_icon">
          <el-button icon="el-icon-view" circle></el-button>
          <span>视角</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map_canvas from "@/components/Map_canvas";

import ControlStation from "../ControlStation/index.vue";
export default {
  components: { Map_canvas, ControlStation},
};
</script>

<style scoped lang="less">
.maps {
  width: 100%;
  // min-height: 400px;
  height: 100%;
  margin-top: 10px;
  position: relative;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;

  .map_left,
  .map_right {
    position: absolute;
    top: 0;
    width: 50px;
    min-height: 200px;
    background: #f3f3f3;
    border-radius: 10px;
    font-size: 16px;
    .left_list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .l_icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 3px;
      }
    }
  }
  .map_right {
    right: 0;
  }
}
</style>
