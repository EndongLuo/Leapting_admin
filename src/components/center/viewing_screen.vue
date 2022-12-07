<template>
  <div class="vs_show">
    <div class="vs_five">
      <template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部" name="all">
      <div class="jqr1">  机器人1号电量不足</div>
      <div class="jqr2">  机器人2号想要逃跑</div>
      <div class="jqr3">  机器人3号圆满完成任务</div>
    </el-tab-pane>
    <el-tab-pane label="警告" name="warning">警告</el-tab-pane>
    <el-tab-pane label="报错" name="An error">报错</el-tab-pane>
    <el-tab-pane label="完成" name="complete">完成</el-tab-pane>
    <el-tab-pane label="任务" name="task">任务</el-tab-pane>
  </el-tabs>
</template>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.vs_show{
  width: 5rem;
  height: 3rem;
  box-shadow:0 0  10px 10px #ccc;
}
.jqr1{
  color: yellow;
}
.jqr2{
  color: red;
}
.jqr1{
  color: green;
}
.vs_five{
  font-size: 0.2rem;
}
el-tab-pane{
  text-indent: 0.3rem;
}
</style>