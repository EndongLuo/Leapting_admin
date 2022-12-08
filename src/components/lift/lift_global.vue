<template>
  <div>
    <div>
      <el-row class="block-col-2" style="margin-top: 400px">
        <el-col>
          <span class="demonstration">click 激活</span>
          <el-dropdown trigger="click" placement="top-end">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>

            <el-dropdown-menu slot="dropdown">
              <div style="width: 400px; height: 200px; background-color: black">
                sdfdgxcsdg
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.lift_top {
  width: 100vw;
  height: 100vh;
  background-color: rgb(131, 131, 136);
}
</style>