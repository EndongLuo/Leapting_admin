<template>
  <!-- 右操作盘 -->
  <div class="RightOperationDisk">
    <!-- 吸 放 按钮 添加-->
    <div class="square">
      <div class="btn_two">
      <button class="btn_left">吸</button>
      <button class="btn_right">放</button>
    </div>
    <!-- 左右箭头 -->
    <div class="left_right">

      <i class="el-icon-arrow-left"></i>

      <i class="el-icon-arrow-right"></i>

    </div>
    <!-- 添加动作 -->
    <div class="add_">
      <button class="action_">＋动作</button>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.RightOperationDisk {
  width: 5rem;
  height: 3.6rem;
  /* background-color: #eae8eb; */
  /* background-color: #79d9a7; */
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  /* border-radius: 1rem; */
}
.btn_two{
  width: 4rem;
  height: 1rem;
  /* background-color: #eae8eb; */
  position: relative;
}
.left_right{
  width: 5rem;
  height: 1.6rem;
  /* background-color: #f0eca6; */
  position: relative;
}
.add_{
  width: 5rem;
  height: 1rem;
  /* background-color: #e0acc6; */
  position: relative;
}
.btn_left{
  width: 0.6rem;
  height: 0.6rem;
  background-color: #275388;
  border-radius: 1rem;
  color: white;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.6rem;
  position: absolute;
  left: 0.9rem;
  top: 0.3rem;
}.btn_right{
  width: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  height: 0.6rem;
  background-color: #275388;
  border-radius: 1rem;
  color: white;
  font-size: 0.2rem;
  position: absolute;
  left: 2rem;
  top: 0.3rem;
}
.el-icon-arrow-left{
  color: #28568d;
  font-size: 1.5rem;
  font-weight: bolder;
  position: absolute;
  top: 0.1rem;
  left: 0.5rem;
}
.el-icon-arrow-right{
  color: #28568d;
  font-size: 1.5rem;
  font-weight: bolder;
  position: absolute;
  top: 0.1rem;
  left: 1.6rem;
}
.action_{
  width: 1.5rem;
  height: 0.5rem;
  background-color: #27538e;
  border-radius: 1rem;
  color: white;
  font-size: 0.2rem;
  position: absolute;
  text-align: center;
  line-height: 0.5rem;
  left: 1.1rem;
  top: 0.1rem;
}
.square{
  width: 3.5rem;
  height: 3.5rem;
  background-color: #eae8eb;
  border-radius: 100%;
  position: relative;
  left: 0.4rem;
}
</style>