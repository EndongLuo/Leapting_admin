<template>
    <div class="wrap">
      <div @click="pull_up(event)">
        545454
      </div>
      <div class="bottomPopup" id="bottomPopup">
        <div
          class="title"
          @touchmove="touchmove($event)"
          @touchstart="touchstart($event)"
          @touchend="touchend($event)"
        >
        <i class="el-icon-arrow-up"></i>
        </div>
        <div class="contentList">
          <img src="./image/左.png" alt="">
          <img src="./image/右.png" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { resize } from "@/utils/dom";
export default {
  data() {
    return {
      source: {},
    };
  },
  created() {
    resize();
  },
  mounted() {},
  methods: {
    pull_up(e){
        this.touchstart(e),
        console.log(e)
        this.touchend(e);
        
    },
    touchstart(e) {
      let element = e.targetTouches[0];
      this.source.client = {
        x: element.clientX,
        y: element.clientY,
      };
    },
    touchmove(e) {
      let element = e.targetTouches[0];
      let maxHeight = document.querySelector('.contentList').offsetHeight
      let offsetHeightCont =
        document.querySelector(".contentList").offsetHeight;
      console.log("sss:" + offsetHeightCont);
      let distance = this.source.client.y - element.clientY;
      if (distance > maxHeight) {
        document
          .getElementById("bottomPopup")
          .animate(
            { transform: `translateY(0)` },
            { duration: 1, easing: "linear", fill: "forwards" }
          );
      } else if (distance < 0 && distance > -maxHeight) {
        document
          .getElementById("bottomPopup")
          .animate(
            { transform: `translateY(${-distance}px)` },
            { duration: 1, easing: "linear", fill: "forwards" }
          );
      }else if (distance < -maxHeight) {
        document
          .getElementById("bottomPopup")
          .animate(
            { transform: `translateY(${maxHeight})` },
            { duration: 1, easing: "linear", fill: "forwards" }
          );
      } else {
        document
          .getElementById("bottomPopup")
          .animate(
            { transform: `translateY(${maxHeight - distance}px)` },
            { duration: 1, easing: "linear", fill: "forwards" }
          );
      }
    },
    touchend(e) {
      let element = e.changedTouches[0];
      let distance = this.source.client.y - element.clientY;
      if (distance > 0) {
        document
          .getElementById("bottomPopup")
          .animate(
            { transform: 'translateY(0px)' },
            { duration: 200, easing: "linear", fill: "forwards" }
          );
      } else {
        document
          .getElementById("bottomPopup")
          .animate(
            { transform: 'translateY(4rem)' },
            { duration: 300, easing: "linear", fill: "forwards" }
          );
      }
    },
  },
};
</script>



<style lang="less">

.wrap {
    .bottomPopup {
        position: fixed;
        width: 90%;
        // height: 300px;
        bottom: 0;
        transform: translateY(4rem);
        background: #f1f1f1;
        color: #000;
        font-size: 16px;
        .title {
            text-align: center;
            line-height: 30px;
            border-bottom: 1px solid rgb(184, 184, 184);
            background-color: #eeecec;
            color: rgb(206, 206, 206);
        }

        .contentList {
            height: 4rem;
            overflow-y: auto;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>