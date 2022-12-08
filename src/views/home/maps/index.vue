<template>
  <div class="maps">
    <img src="./image/map001.png" alt="" />
    <div class="map_left">
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
    <div class="map_right">
      <div class="left_right">
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
export default {};
</script>

<style scoped lang="less">
.maps {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  position: relative;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }

  .map_left,
  .map_right {
    position: absolute;
    top: 0;

    width: 50px;
    min-height: 200px;
    background: #f3f3f3;
    border-radius: 10px;
    font-size: 14px;
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
        margin: 5px;
      }
    }
  }
  .map_right {
    right: 0;
  }
}
</style>
