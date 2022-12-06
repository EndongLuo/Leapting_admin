<template>
  <div class="tips">
    <!-- 电池 -->
    <div>
        <battery :quantity=50  style="width:70px;"></battery>
    </div>
    

  </div>
</template>

<script>
import battery from '@/components/Battery'
export default {
    components: {battery}

}
</script>

<style>

</style>