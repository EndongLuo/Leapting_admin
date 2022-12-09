<template>
  <!-- 右操作盘 -->
  <div class="RightOperationDisk">
    <!-- 吸 放 按钮 -->
    <div class="btn_two">
      <button class="btn_left">吸</button>
      <button class="btn_right">放</button>
    </div>
    <!-- 左右箭头 -->
    <div class="left_right">
      <img src="../../assets/左-箭头.png"
       alt="" 
       width="100rem"
       class="letft_arrow"
       >
      <img src="../../assets/右-箭头.png"
       alt=""  
       width="100rem"
       class="right_arrow"
       >
    </div>
    <!-- 添加动作 -->
    <div class="add_">
      <button class="action_">＋动作</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.RightOperationDisk {
  width: 5rem;
  height: 3.6rem;
  background-color: #eae8eb;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
}
.btn_two{
  width: 5rem;
  height: 1rem;
  /* background-color: #eae8eb; */
  position: relative;
}.left_right{
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
  width: 1rem;
  height: 0.5rem;
  background-color: #275388;
  border-radius: 1rem;
  color: white;
  font-size: 0.2rem;
  position: absolute;
  left: 1rem;
  top: 0.3rem;
}.btn_right{
  width: 1rem;
  height: 0.5rem;
  background-color: #275388;
  border-radius: 1rem;
  color: white;
  font-size: 0.2rem;
  position: absolute;
  left: 3rem;
  top: 0.3rem;
}
.letft_arrow{
  position: absolute;
  left: 1rem;
  top: 0.2rem;
}
.right_arrow{
  position: absolute;
  left: 3rem;
  top: 0.2rem;
}
.action_{
  width: 2rem;
  height: 0.5rem;
  background-color: #27538e;
  border-radius: 1rem;
  color: white;
  font-size: 0.2rem;
  position: absolute;
  left: 1.5rem;
  top: 0.3rem;
}
</style>