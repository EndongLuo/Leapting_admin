<template>
  <div >
    <hand_left/>
   <hand_right/>
   <viewing_screen/>
   <lift_global/>
  </div>
</template>
<!--引入所有组件 -->

<script>
import hand_left from '@/components/hand_shank/hand_left.vue';
import hand_right from '@/components/hand_shank/hand_right.vue';
import viewing_screen from '@/components/center/viewing_screen.vue';
import lift_global from '@/components/lift/lift_global.vue';
export default {
components:{hand_left,hand_right,viewing_screen,lift_global},


}
</script>

<style>

</style>