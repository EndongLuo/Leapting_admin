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

</style>
