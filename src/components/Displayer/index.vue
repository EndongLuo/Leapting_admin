<template>
  <!-- 显示屏 -->
  <div>
    <div class="content-center">
      <div class="fontsizt_five">
         <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" class="all">
          <div class="jqr1">机器人一号完成任务</div>
          <div class="jqr2">机器人二号发生异常</div>
          <div class="jqr3">机器人三号电量不足</div>
        </el-tab-pane>
        <el-tab-pane label="报错" class="errot">报错</el-tab-pane>
        <el-tab-pane label="警告" class="alert">警告</el-tab-pane>
        <el-tab-pane label="完成" class="complete">完成</el-tab-pane>
        <el-tab-pane label="任务" class="task">任务</el-tab-pane>
      </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.content-center{
width: 8rem;
height: 3.6rem;
border: 1px solid #d6d7d8;
box-shadow:0 0 5px 5px #d6d7d8;
}
.errot {
  color: rgb(236, 145, 41);
}
.alert {
  color: red;
}
.complete {
  color: green;
}
.jqr1{
  color: green;
}.jqr2{
  color: red;
}.jqr3{
  color: rgb(240, 119, 6);
}
.fontsizt_five{
  font-size: 0.25rem;
}
</style>