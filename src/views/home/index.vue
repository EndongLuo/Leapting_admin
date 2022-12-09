<template>
    <div class="test">
        <tips />
        首页
<Slide/>
    </div>
    
  </template>
  
  <script>
  import tips from './tips'
  import Slide from './Slide'
  export default {
    name: "home",
    components:{tips,Slide},
    data() {
      return {
      };
      
    },
    mounted(){
    },
    methods: {
      
  },
  };
  </script>
  
  <style scoped>
  .test{
    font-size: 0.5rem;
  }
  </style>
  