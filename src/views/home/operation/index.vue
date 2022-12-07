<template>
  <div >
    <hand_left/>
   <!-- <hand_right/>
   <viewing_screen/> -->
  </div>
</template>
<!--引入所有组件 -->

<script>
import hand_left from '@/components/hand_shank/hand_left.vue';
// import hand_right from '@/components/hand_shank/hand_right.vue';
// import viewing_screen from '@/components/center/viewing_screen.vue';
export default {
components:{hand_left},

//,hand_right,viewing_screen
}
</script>

<style>

</style>