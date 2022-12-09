<template>
  <!-- 左操作盘 -->
  <div class="LeftOperationDisk">
    <!-- 上下和轴点 -->
    <div class="circular">
      <img
        src="../../assets/上-箭头.png"
        alt=""
        width="140rem"
        class="top_arrow"
      />
      <img
        src="../../assets/下-箭头.png"
        alt=""
        width="140rem"
        class="bottom_arrow"
      />

      <div class="shaft-x">X</div>
      <div class="shaft-y">Y</div>
      <div class="shaft-z">Z</div>
      <div class="shaft-a">A</div>
      <div class="shaft-b">B</div>
      <div class="shaft-c">C</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.LeftOperationDisk {
  width: 5rem;
  height: 3.6rem;
  /* background-color: rgb(238, 162, 181); */
  margin-top: 0px;
}
.circular {
  width: 3.5rem;
  height: 3.5rem;
  background-color: #eae8eb;
  border-radius: 100%;
  position: relative;
  left: 0.9rem;
}
.top_arrow {
  position: absolute;
  top: 0.7rem;
  left: 1rem;
}
.bottom_arrow {
  position: absolute;
  top: 2rem;
  left: 1rem;
}
.shaft-x{
  width: 0.5rem;
  height: 0.5rem;
  background-color: #28568d;
  border-radius: 100rem;
  color: #eae8eb;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.5rem;
  position: absolute;
  top: 0.1rem;
  left: 1.8rem;
}
.shaft-y{
  width: 0.5rem;
  height: 0.5rem;
  background-color: #28568d;
  border-radius: 100rem;
  color: #eae8eb;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.5rem;
  position: absolute;
  top: 0.5rem;
  left: 2.4rem;
}.shaft-z{
  width: 0.5rem;
  height: 0.5rem;
  background-color: #28568d;
  border-radius: 100rem;
  color: #eae8eb;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.5rem;
  position: absolute;
  top: 1.1rem;
  left: 2.7rem;
}.shaft-a{
  width: 0.5rem;
  height: 0.5rem;
  background-color: #28568d;
  border-radius: 100rem;
  color: #eae8eb;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.5rem;
  position: absolute;
  top: 1.8rem;
  left: 2.7rem;
}.shaft-b{
  width: 0.5rem;
  height: 0.5rem;
  background-color: #28568d;
  border-radius: 100rem;
  color: #eae8eb;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.5rem;
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
}.shaft-c{
  width: 0.5rem;
  height: 0.5rem;
  background-color: #28568d;
  border-radius: 100rem;
  color: #eae8eb;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.5rem;
  position: absolute;
  top: 2.8rem;
  left: 1.8rem;
}
</style>