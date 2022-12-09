<template>
  <div class="tips">
    <div class="left">
      <!-- 电池 -->
      <div @click="open_battery">
        <Battery :quantity="10" />
      </div>

      <!-- 信号 -->
      <div class="signal" @click="open_signal">
        <Signal :num="80" />
      </div>

      <!-- 定位 -->
      <div class="location">
        <i class="el-icon-location-outline"></i>
      </div>
      <!-- 地图 -->
      <div class="map" @click="centerDialogVisible = true">map001</div>

      <!-- 地图弹框 -->
      <el-dialog
        title="选择地图"
        :visible.sync="centerDialogVisible"
        width="80%"
        center
      >
        <!-- 地图缩略图 -->
        <div class="demo-image__preview">
          <div class="inner">
            <div class="map_list" v-for="(i, index) in 5" :key="index">
              <el-image
                style="width: 200px; height: 200px"
                :src="url"
                :preview-src-list="srcList"
              >
              </el-image>
              <div class="map_name">
                <el-radio v-model="radio1" label="i" border>map001</el-radio>
              </div>
              <!-- <span >map001</span> -->
            </div>
          </div>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
    <!-- 右边 -->
    <div class="right">
      <!-- 任务 -->
      <Tasks />
    </div>
  </div>
</template>

<script>
import Battery from "@/components/Battery";
import Signal from "@/components/Signal";
import Tasks from "@/components/Tacks";
export default {
  name: "home",
  components: { Signal, Battery, Tasks },
  data() {
    return {
      radio1: "1",
      centerDialogVisible: false,
      url: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      srcList: [
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
    };
  },
  methods: {
    open_battery() {
      this.$alert("50%", "电量", {
        confirmButtonText: "确定",
      });
    },
    open_signal() {
      this.$alert("弱", "信号", {
        confirmButtonText: "确定",
      });
    },
  },
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 768px) {
  .tips {
    flex-wrap: wrap;
  }
}
.demo-image__preview {
  display: flex;
  justify-content: center;
  .inner {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    .map_list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5px;
      &:hover{
          outline: #f1f1f1 solid 1px;
        }
      // .el-image{
      //   &:hover{
      //     outline: #409EFF solid 1px;
      //   }
      // }
    }
    .map_name {
      margin: 5px;
    }
  }
}
.tips {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  .left {
    display: flex;
    align-items: center;
    .map {
      margin: 0 0.5rem;cursor: pointer;
      &:hover{
        color: #409EFF;
      }
    }
    .location {
      margin: 0 5px;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
