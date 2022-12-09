<template>
  <div class="test">
    <Tips />
    <Maps />
    <Pull_up />
  </div>
</template>

<script>
import Tips from "./tips";
import Maps from "./maps";
import Pull_up from "@/components/Pull_up";
export default {
  name: "home",
  components: { Tips, Maps, Pull_up },
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
