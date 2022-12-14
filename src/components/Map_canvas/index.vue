<template>
  <div>
    <canvas
      id="cvs"
      width="1920"
      height="750"
    ></canvas>
    <div class="img" v-show="false"><img src="./img/map002.png" alt="" /></div>
  </div>
</template>

<script>
export default {
  name: "cvs",
  data() {
    return {
      useSatatu: false, // 是否处于点击状态
      useList: [], // 储存滑动时的坐标
      imageClice: {
        // 当前图片的左上角
        x: 5,
        y: 0,
      },
      imageBox: 1000, // 图片的宽高，这里可以更具图片原有的大小按比例缩放
      image: new Image(),
      ctx: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let { useSatatu, useList, imageClice, imageBox, image, ctx } = this;
      const source = document.getElementById("cvs");
      const img = document.querySelector(".img img");
      //   image.src =
      //     "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2Ftp10%2F2111251455453954-0-lp.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668321842&t=f7a4c1d5256426ae3633c8a5c9356676";
      // image.src = "./img/map002.png";
      image.src = img.src;
      image.onload = function () {
        ctx = source.getContext("2d");
        // console.log(ctx);
        ctx.drawImage(image, imageClice.x, imageClice.y, imageBox, imageBox);
      };
      source.addEventListener("mousedown", (e) => {
        if (
          imageClice.x <= e.clientX &&
          imageClice.x + imageBox >= e.clientX &&
          imageClice.y <= e.clientY &&
          imageClice.y + imageBox >= e.clientY
        ) {
          useList = [];
          useSatatu = !useSatatu;
          ctx.beginPath();
          ctx.rect(imageClice.x, imageClice.y, imageBox, imageBox);
          ctx.stroke();
          useList.push({
            x: e.clientX,
            y: e.clientY,
          });
          source.onwheel = (e) => {
            e.wheelDelta > 0 ? (imageBox += 100) : (imageBox -= 100);
            createImage();
          };
        }
      });
      source.addEventListener("mousemove", (e) => {
        if (useSatatu) {
          console.log(e.clientX, e.clientY)
          useList.push({
            x: e.clientX,
            y: e.clientY,
          });
          const val = useList.splice(0, 1);
          imageClice = {
            x: imageClice.x + useList[0].x - val[0].x,
            y: imageClice.y + useList[0].y - val[0].y,
          };
          createImage();
        }
      });
      source.addEventListener("mouseup", (e) => {
        useSatatu = false;
      });

      function createImage() {
        ctx.clearRect(0, 0, 1920, 750);
        ctx.beginPath();
        ctx.drawImage(image, imageClice.x, imageClice.y, imageBox, imageBox);
        ctx.rect(imageClice.x, imageClice.y, imageBox, imageBox);
        ctx.stroke();
      }
      source.onwheel = (e) => {
        e.wheelDelta > 0 ? (imageBox += 100) : (imageBox -= 100);
        createImage();
      };
    },
  },
};
</script>
<style lang="less">

</style>