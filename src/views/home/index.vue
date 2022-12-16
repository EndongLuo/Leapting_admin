<template>
  <div class="home">
    <Tips />
    <div class="h_outer">
      <Maps />
      <Pull_up />
      <ControlStation/>
    </div>
  </div>
</template>

<script>
import Tips from "./tips";
import Maps from "./maps";
import Pull_up from "@/components/Pull_up";

import ControlStation from "@/views/home/ControlStation/index.vue";

export default {
  name: "home",
  components: { Tips, Maps, Pull_up ,ControlStation},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.home {
  font-size: 0.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.h_outer{
  /* display: flex;
  flex-direction: column; */
  flex: 5;
  /* height: 900px; */
}
</style>
