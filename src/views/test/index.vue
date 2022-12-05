<template>
  <div>test
    {{bannerList}}
  </div>
  
</template>

<script>
import { reqBannerList } from "@/api";
export default {
  name: "test",
  data() {
    return {
      bannerList: [],
    };
    
  },
  mounted(){
    this.getBannerList()
  },
  methods: {
    async getBannerList() {
        let res = await reqBannerList();
        this.bannerList = res.data;
        console.log(res.data);
    },
},
};
</script>

<style></style>
