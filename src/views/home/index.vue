<template>
  <div class="test">
    <tips />
    <operation />
  </div>
</template>
  
  <script>
import tips from "./tips";
import operation from "./operation";
export default {
  name: "home",
  components: { tips, operation },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
  
  <style scoped>
.test {
  font-size: 0.5rem;
}
</style>
  