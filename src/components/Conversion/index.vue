<template>
    <!--切换 全局 轴点  -->
  <div>
    <el-switch
  v-model="value"
  active-color="#2a427a"
  inactive-color="#4ab251">
</el-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>

<style>

</style>