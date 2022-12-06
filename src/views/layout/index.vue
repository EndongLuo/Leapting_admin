<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <test />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import test from '../test'
export default {
    name:'layout',
    components:{
        test
    }
};
</script>

<style >
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /* line-height: 3.75rem; */
    height: 5vh;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    height: 100vh;
    color: #333;
    text-align: center;
    /* line-height: 12.5rem; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 10rem; */
    /* height: 80vh; */

  }
  
  body > .el-container {
    margin-bottom: 2.5rem;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 16.25rem;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 20rem;
  }</style>
