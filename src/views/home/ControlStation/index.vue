<template>
  <!-- 整个控制台上拉框 -->
  <div>
    <div @click="med" class="p" :style="{bottom:abottom}">{{ as }}</div>

    <div class="entirety" v-show="ada">
      <!-- 开关按钮 -->
      <Conversion />

      <div class="left_left">
        <!-- 左操作手柄 -->
        <hand_left />
      </div>

      <div class="Dispensable" v-if="isShow">
        <!-- 中间显示器 -->
        <Displayer />
      </div>

      <div class="right_right">
        <!-- 右操作手柄 -->
        <hand_right />
      </div>
    </div>


  </div>
</template>

<script>
//开关按钮
import Conversion from '@/components/Conversion/index.vue'
//左操作手柄组件引入
import hand_left from '@/components/HandShank/hand_left.vue'
//右操作手柄组件引入
import hand_right from '@/components/HandShank/hand_right.vue'
//中间显示屏组件引入
import Displayer from '@/components/Displayer/index.vue'
export default {
  components: { hand_left, hand_right, Displayer, Conversion },
  data() {
    return {
      ada: false,
      as: '─────',
      abottom: 0,
      awq: true,
      isShow: true,
    }
  },
  methods: {


    med() {
      this.ada = !this.ada;
      if (this.as == "─────") {
        this.as = "─────";
      } else {
        this.as = "─────";
      }
      if (this.abottom == 0) {
        this.abottom = "40%";
      } else {
        this.abottom = 0;
      }


    },
  },
}
</script>

<style>
@media screen and (min-width:769px) {
  .left_left {
    display: flex;
    justify-content: center;
  }

  .right_right {
    display: flex;
    justify-content: center;
  }

  .entirety {
    width: 100%;
    height: 40%;
    background-color: #fbfdfb;
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-right: 100px;
  }

  .p {
    /* width: 92.4%; */
    width: 100%;
    /* margin-left: 50vw; */
    font-size: 20px;
    font-weight: 500;
    /* border-bottom: 1px solid rgb(171, 169, 169); */
    text-align: center;
    position: absolute;
  }

  /* 
.total {
  display: flex;
} */
}

@media screen and (max-width:768px) {
  .left_left {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
  }

  .right_right {
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
  }

  .entirety {
    width: 100%;
    height: 40%;
    background-color: #fbfdfb;
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
  }

  .p {
    /* width: 92.4%; */
    width: 100%;
    /* margin-left: 50vw; */
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid #000;
    text-align: center;
    position: absolute;
  }

  .Dispensable {
    display: none;
  }
}
</style>