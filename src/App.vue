<template>
  <div id="app">
    <!-- <layout /> -->
    
    <router-view />
  </div>
</template>

<script>
import layout from './views/layout'

export default {
  name: 'App',
  components: {
    layout
  },
  mounted(){
    console.log(this.$route)
  }
}
</script>

<style>
/* @media screen and (min-width: 768px) {
  html {
    font-size: 20px;
  }
  body{
    background-color: rgb(54, 32, 32);
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 10px;
  }
  body{
    background-color: rgb(209, 115, 115);
  }

} */
</style>
