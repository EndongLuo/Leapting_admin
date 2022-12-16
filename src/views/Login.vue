<template>
    <!-- 背景 -->
    <div class="div-background">
        <!-- 表单验证 -->
        <form action="">
            <div class="div-from">
                <div class="welcome">欢迎登录</div>
                <input type="text" class="ipt" placeholder="账户:">
                <br>
                <input type="password" class="ipt" placeholder="密码:">

                <!-- <SliderCheck/> -->
                <br>
                <!-- <button class="btn-dl" @click ="handle">登录</button> -->
                <el-button class="btn-dl" @click="handle">点击登录</el-button>
            </div>
        </form>
    </div>
</template>

<script>
// import SliderCheck from '@/components/SliderCheck'
//   components:{SliderCheck},
export default {

    data() {
        return {
            account: "",
            password: "",
        };
    },
    methods: {
        handle() {
            //点击跳转
            //  if(!this.account=="" && !this.mima==""){
            //   localStorage.setItem("nama",this.account);
            //  }
            this.$router.push('/layout');
        },
    },
}
</script>


<style scoped>
.div-background {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #264989;
}

.div-from {
    width: 400px;
    height: 260px;
    background-color: rgba(13, 13, 13, 0.1);
    text-align: center;
    border-radius: 20px;

}

.ipt {
    width: 180px;
    height: 30px;
    margin-top: 15px;
    border-radius: 15px;
    /* border-radius: 1rem; */
    text-indent: 0.3rem;
}

input:focus {
    border-style: solid;
    border-color: #fbfbfb;
    box-shadow: 0 0 15px #589cfd;
}

.el-button {
    border-radius: 15px;
    padding: 7px 15px;
    color: #757575;
    margin-top: 20px;
}

.welcome {
    font-size: 0.3rem;
    color: rgb(252, 252, 252);
    padding-top: 0.3rem;
}
</style>