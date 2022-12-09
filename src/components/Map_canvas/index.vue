<template>
  <div class="Map_canvas">
    <canvas id="mycanvas"></canvas>
    <el-button type="primary" round @click="left">left</el-button>
    <img class="img" src="./img/map001.png" alt="" />
    {{ xmin }}
    {{ xmax }}
    {{ ymin }}
    {{ ymax }}
  </div>
</template>

<script>
export default {
  name: "Map_canvas",
  data() {
    return {
      xmin: 10,
      ymin: 10,
      xmax: 10,
      ymax: 10,
    };
  },
  mounted() {
    this.draw();
    this.draw().left();;
    left()
  },
  methods: {
    draw() {
      var can = document.getElementById("mycanvas");
      var img = document.querySelector(".img");
      //获取Context上下文
      var ctx = can.getContext("2d");

      var image = new Image();
      console.log(image);
      // image.src = "./img/map001.png";
      console.log(img);
      image.src = img.src;
      ctx.drawImage(image, 0, 0, 300, 150);

      function hua(moveleft, movetop) {
        // image.src = url();
        if (image.complete) {
          ctx.clearRect(0, 0, 800, 600);
          // ctx.drawImage(image, 0, 0);
          ctx.drawImage(image, moveleft, movetop);
          return;
        }
        image.onload = function () {
          ctx.clearRect(0, 0, 800, 600);
          ctx.drawImage(image, moveleft, movetop);
        };
      }

      // 左移
      function left() {
        var dx = xmax - xmin;
        xmin -= dx * 0.2;
        xmax -= dx * 0.2;
        // draw()
        hua(xmin, xmax)
    }

    // 放大
    function zoomIn(){
        var dx = xmax - xmin;
        var dy = ymax - ymin;
        xmin += dx / 4;
        xmax -= dx / 4;
        ymin += dy / 4;
        ymax -= dy / 4;
        draw();
        
    }

    // 缩小
    function zoomDown(){
        var dx = xmin- xmax  ;
        var dy =  ymin- ymax;
        xmin += dx * 4;
        xmax -= dx * 4;
        ymin += dy * 4;
        ymax -= dy * 4;
        draw();
    }

      var { xmin, xmax, ymin, ymax } = this;
      console.log(this);
      can.onmousedown = function (event) {
        event = event || window.event;
        var left = event.offsetX;
        var top = event.offsetY;
        // console.log(left, top);

        can.onmousemove = function (event) {
          event = event || window.event;
          var left2 = event.offsetX;
          var top2 = event.offsetY;
          var moveleft = left2 - left;
          var movetop = top2 - top;
          ctx.clearRect(0, 0, 800, 600);
          ctx.drawImage(img, moveleft, movetop);
        };

        can.onmouseup = function (event) {
          event = event || window.event;
          var left1 = event.offsetX;
          var top1 = event.offsetY;
          var moveleft = left1 - left;
          var movetop = top1 - top;

          var scalex = (xmax - xmin) / 800;
          var scaley = (ymax - ymin) / 600;

          // console.log(scalex === scaley)
          xmin -= moveleft * scalex;
          xmax -= moveleft * scalex;
          ymin += movetop * scaley;
          ymax += movetop * scaley;
          console.log(xmax);
          // this.draw()
          hua(moveleft, movetop);

          can.onmouseup = null;
          can.onmousemove = null;
        };
      };
    },
  },
};
</script>

<style lang="less">
.Map_canvas {
  width: 100%;
  height: 100%;

  // position: relative;
  overflow: hidden;
}
canvas {
  width: 100%;
  min-height: 400px;
  height: 100%;
  // background-color: #d4d4d4;
}
.img {
  margin-top: -400px;
  visibility: hidden;
}
</style>