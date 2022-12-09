<template>
  <div>
    <p @click="med" class="p" :style="{bottom:abottom}"> {{as}} </p>

    <div class="entirety" v-show="ada">
      <!-- 左操作盘 -->
      <hand_left />

      <!-- 中间显示屏 -->
      <Vewingccreen />

      <!-- 右操作盘 -->
      <hand_right />
    </div>
  </div>
  <!-- 上拉框 -->
</template>

<script>
import hand_left from "../../../components/HandShank/hand_left.vue";

import Vewingccreen from "../../../components/VewingCcreen/index.vue";

import hand_right from "../../../components/HandShank/hand_right.vue";

export default {
  components: { Vewingccreen, hand_left, hand_right },
  data(){
    return{
      ada:false,
      as:'∧',
      abottom:0
    }
  },
  methods: {
    med(){
      this.ada=!this.ada;
      if(this.as=='∧'){
        this.as='V'
      }else{
        this.as='∧'
      }
      if (this.abottom==0) {
        this.abottom="40vh"
      }else{
        this.abottom=0
      }
    }
  }
};
</script>

<style>
.entirety {
  width: 100%;
  height: 40vh;
  /* background-color: rgb(152, 212, 236); */
  position: fixed;
  bottom: 0px;
  margin-left: -20px;
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
}
.p{
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #000;
  text-align: center;
  position: absolute;
}
</style>