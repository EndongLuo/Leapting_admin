<template>
    <div class="test">
        <tips />
        首页

    </div>
    
  </template>
  
  <script>
  import tips from './tips'
  export default {
    name: "home",
    components:{tips},
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
  