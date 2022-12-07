<template>
  <div class="test">
    <Tips />
    <Maps />
  </div>
</template>

<script>
import Tips from "./tips";
import Maps from "./maps";
export default {
  name: "home",
  components: { Tips, Maps },
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
