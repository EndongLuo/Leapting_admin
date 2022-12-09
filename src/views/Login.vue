<template>
  <!-- 背景 -->
  <div class="div-background">
    <!-- 表单验证 -->
    <form action="">
    <div class="div-from"> 
    <div class="welcome">欢迎登录</div>
      <input type="text" class="ipt-zh" placeholder="账户:" >
      <br>
      <input type="password" class="ipt-mm" placeholder="密码:">
      <br>
      <!-- <button class="btn-dl" @click ="handle">登录</button> -->
      <el-button class="btn-dl" @click ="handle">点击登录</el-button>
    </div>
    <div class="ewm">
      <img src="../assets/人机验证.png" alt="" width="130rem">
    </div>
  </form>
  </div>
</template>

<script>
    export default{
        data() {
          return{
            account:"",
            password:"",
          };
        },
        methods:{
            handle (){
           //点击跳转
          //  if(!this.account=="" && !this.mima==""){
          //   localStorage.setItem("nama",this.account);
          //  }
           this.$router.push('/layout');
            },
        },
    }
</script>


<style>
*{
  margin: 0;
  padding: 0;
}
.div-background{
  width: 100vw;
  height: 100vh;
  background-color: #1c3b7a;
}
.div-from{
width: 8rem;
height: 5rem;
background-color: aquamarine;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#f8faf8;
  text-align: center;
  border-radius: 20px;
  margin-top: 10px;
}
.ipt-zh{
  width: 3rem;
  height: 0.4rem;
  margin-top: 0.5rem;
  border-radius: 1rem;
  text-indent: 0.3rem;
}
.ipt-mm{
  width: 3rem;
  height: 0.4rem;
  margin-top: 0.5rem;
  border-radius: 1rem;
  text-indent: 0.3rem;
}

input:focus{
    border-style:solid;
    border-color: #03a9f4;
	box-shadow: 0 0 15px #03a9f4;
}
.btn-dl{
  background-color:#1c3b7a ;
  margin-top: 0.5rem;
  border-radius: 1rem;
  color: white;
}
.welcome{
  font-size: 0.3rem;
  margin-top: 0.3rem;
  color: rgb(0, 6, 10);
}
.ewm{
  margin-left: 12rem;
  position: absolute;
  top: 5rem;
}

</style>