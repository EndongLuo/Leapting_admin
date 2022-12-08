<template>
  <div id="app">
    <canvas id="mycanvas" ref="mycanvas" width="600px" height="400px"></canvas>
  </div>
</template>

<script>
export default {
  name: "Map_canvas",
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
        var myCanvas = document.getElementById("mycanvas");
        //获取Context上下文
        var ctx = myCanvas.getContext("2d");
        var image = new Image();
        image.src = "./img/map001.png";
        //当图片加载完成后
        image.onload =  ()=> {
          ctx.drawImage(image, 0, 0, 600, 400);
        };
    }
  },
};
</script>

<style lang="less">
// #app {
//   text-align: center;
// }

canvas {
  width: 100%;
  height: 100%;
  background-color: lightsalmon;
}

// img {
//   width: 50px;
//   height: 50px;
// }
</style>