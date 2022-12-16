<template>
  <div>
    <!-- <canvas
      id="cvs"
      width="1920"
      height="750"
      style="backgroundcolor: #aaa"
    ></canvas> -->
    <!-- <div class="img" v-show="false"><img src="./img/map002.png"  alt=""></div> -->
    <!-- <div>demo</div> -->
    <div id="map"></div>
  </div>
</template>

<script>
// import "@/utils/ros/easeljs";
// import "easeljs/lib/easeljs";
// import "eventemitter2/lib/eventemitter2";
// import ROSLIB from "roslib/build/roslib";
// import ROS2D from "ros2d/build/ros2d";
export default {
  name: "demo2",
  data() {
    return {
      ws_address: "ws://192.168.4.139:9090",
      connected: false,
      ros: null,
      logs: [],
      loading: false,
      topic: null,
      message: null,
    };
  },
  mounted() {
    
    this.ros = new ROSLIB.Ros({
      url: this.ws_address,
    });
    console.log(this.ros);
    //判断是否连接成功
    this.ros.on("connection", function () {
      console.log("Connected to websocket server.");
    });

    this.ros.on("error", function (error) {
      console.log("Error connecting to websocket server: ", error);
    });

    this.ros.on("close", function () {
      console.log("Connection to websocket server closed.");
    });

    // Create the main viewer. 创建主查看器。
    var viewer = new ROS2D.Viewer({
      divID: "map",
      width: 800,
      height: 500,
    });

    // Setup the map client. 设置地图客户端。
    var gridClient = new ROS2D.OccupancyGridClient({
      ros: this.ros,
      rootObject: viewer.scene,
      continuous: true,
    });
    // Scale the canvas to fit to the map. 缩放画布以适合地图
    gridClient.on("change", function () {
      viewer.scaleToDimensions(
        gridClient.currentGrid.width,
        gridClient.currentGrid.height
      );
    });
  },
  methods: {
    connect() {
      // this.loading = true;
      // this.ros = new ROSLIB.Ros({
      //   url: this.ws_address,
      // });
      // this.ros.on("connection", () => {
      //   this.logs.unshift(new Date().toTimeString() + " - Connected!");
      //   this.connected = true;
      //   this.loading = false;
      // });
      // this.ros.on("error", (error) => {
      //   this.logs.unshift(new Date().toTimeString() + ` - Error: ${error}`);
      // });
      // this.ros.on("close", () => {
      //   this.logs.unshift(new Date().toTimeString() + " - Disconnected!");
      //   this.connected = false;
      //   this.loading = false;
      // });
    },
    init() {
      //   // Connect to ROS.
      //   this.ros = new window.ROSLIB.Ros({
      //     url: this.ws_address,
      //   });
      //   //判断是否连接成功并输出相应的提示消息到web控制台
      //   this.ros.on("connection", function () {
      //     console.log("Connected to websocket server.");
      //   });
      //   this.ros.on("error", function (error) {
      //     console.log("Error connecting to websocket server: ", error);
      //   });
      //   this.ros.on("close", function () {
      //     console.log("Connection to websocket server closed.");
      //   });
      //   // Create the main viewer. 创建主查看器。
      //   var viewer = new ROS2D.Viewer({
      //     divID: "map",
      //     width: 600,
      //     height: 500,
      //   });
      //   // Setup the map client. 设置地图客户端。
      //   var gridClient = new ROS2D.OccupancyGridClient({
      //     ros: this.ros,
      //     rootObject: viewer.scene,
      //     continuous: true,
      //   });
      //   // Scale the canvas to fit to the map. 缩放画布以适合地图
      //   gridClient.on("change", function () {
      //     viewer.scaleToDimensions(
      //       gridClient.currentGrid.width,
      //       gridClient.currentGrid.height
      //     );
      //   });
    },
  },
};
</script>

<!-- <script setup>
import { ref, nextTick, reactive } from 'vue'
  const useSatatu = ref(false) // 是否处于点击状态
  let useList = reactive([]) // 储存滑动时的坐标
  let imageClice = reactive({ // 当前图片的左上角
    x: 0, y: 0
  })
  const imageBox = ref(200) // 图片的宽高，这里可以更具图片原有的大小按比例缩放
  let ctx = reactive() // 创建的canvas节点
  const image = reactive(new Image()) // 需要使用的图片
  nextTick(() => {
    const source = document.getElementById('cvs')
    const img = document.querySelector('.img img')
    console.log(img)
    // image.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2Ftp10%2F2111251455453954-0-lp.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668321842&t=f7a4c1d5256426ae3633c8a5c9356676'
    // image.src = "./img/map002.png"
    image.src = img.src
    image.onload = function() {
        console.log(ctx)
      ctx = source.getContext('2d')
      console.log(ctx)
      ctx.drawImage(image, imageClice.x, imageClice.y, imageBox.value, imageBox.value)
    }
    source.addEventListener('mousedown', (e) => {
      if(imageClice.x <= e.clientX && (imageClice.x+imageBox.value) >= e.clientX && imageClice.y <= e.clientY && (imageClice.y+imageBox.value) >= e.clientY) {
        useList = []
        useSatatu.value = !useSatatu.value
        ctx.beginPath()
        ctx.rect(imageClice.x, imageClice.y, imageBox.value, imageBox.value)
        ctx.stroke()
        useList.push({
          x: e.clientX,
          y: e.clientY
        })
        document.onwheel = (e) => {
          e.wheelDelta > 0 ?  imageBox.value += 100 : imageBox.value -= 100
          createImage()
        }
      }
    })
    source.addEventListener('mousemove', (e) => {
      if(useSatatu.value) {
        useList.push({
          x: e.clientX,
          y: e.clientY
        })
        const val = useList.splice(0, 1)
        imageClice = {x: imageClice.x+useList[0].x-val[0].x, y:imageClice.y+useList[0].y-val[0].y }
        createImage()
      }
    })
    source.addEventListener('mouseup', (e) => {
      useSatatu.value = false
    })
  })
  function createImage() {
    ctx.clearRect(0, 0, 1920, 750)
    ctx.beginPath()
    ctx.drawImage(image, imageClice.x, imageClice.y, imageBox.value, imageBox.value)
    ctx.rect(imageClice.x, imageClice.y, imageBox.value, imageBox.value)
    ctx.stroke()
  }
  document.onwheel = (e) => {
    e.wheelDelta > 0 ?  imageBox.value += 100 : imageBox.value -= 100
    createImage()
  }
</script> -->

<style lang="less" scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
