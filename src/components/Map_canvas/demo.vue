<template>
    <div >
      <canvas width="1000" height="500" style="border:1px solid #000;" id="myCanvas" @mousewheel="mouseWheel"></canvas>
      <input type="range" id="scale-range" :min="rangeMin" :max="rangeMax" step="0.01" v-model="rangeValue" @mousemove="mousemoveCanvas()" style="display: block;">
      <!-- min设置拖动条最小值 max最大值 -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'zz',
    props: {
      msg: String
    },
    data(){
      return{
        canvas: null,
        ctxCanvas: null,
        rangeMin: 0.5,
        rangeMax: 4,
        rangeValue: 0.5,
        img: null
      }
    },
    mounted(){
      this.canvas = document.getElementById("myCanvas")
      this.ctxCanvas = this.canvas.getContext("2d")
      // 绘制图片
      this.img = new Image()
      this.img.src = "./img/map002.png"
      this.img.onload = () => {
        this.ctxCanvas.drawImage(this.img, this.canvas.width / 2 - this.img.width / 2, this.canvas.height / 2 - this.img.height / 2);
      };
    },
    methods:{
      translateNumber(val){
        return Number(val)
      },
      // 拖拽放大缩小
      mousemoveCanvas(){
        console.log(Number(this.rangeValue),"拖拽")
        this.ctxCanvas.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctxCanvas.save();
        this.ctxCanvas.translate(this.canvas.width / 2 - this.img.width / 2 * this.rangeValue, this.canvas.height / 2 - this.img.height / 2 * this.rangeValue);
        this.ctxCanvas.scale(this.rangeValue, this.rangeValue);
        this.ctxCanvas.drawImage(this.img, 0, 0);
        this.ctxCanvas.restore();
      }, 
      mouseWheel (e) {
        if (e.wheelDelta || e.detail) {
          if (e.wheelDelta > 0 || e.detail < 0) {     //当鼠标滚轮向上滚动时
            this.rangeValue <= 4 ? this.rangeValue = this.translateNumber(this.rangeValue) + 0.2 : this.rangeValue >= 0.5
            if(this.rangeValue <= 4 && this.rangeValue >= 0.5){
              this.ctxCanvas.clearRect(0, 0, this.canvas.width, this.canvas.height);
              this.ctxCanvas.save();
              this.ctxCanvas.translate(this.canvas.width / 2 - this.img.width / 2 * this.rangeValue, this.canvas.height / 2 - this.img.height / 2 * this.rangeValue);
              this.ctxCanvas.scale(this.rangeValue, this.rangeValue);
              this.ctxCanvas.drawImage(this.img, 0, 0);
              this.ctxCanvas.restore(); 
            }      
            console.log("向上",this.rangeValue)
          }
          if (e.wheelDelta < 0 || e.detail > 0) {     //当鼠标滚轮向下滚动时
            this.rangeValue >= 0.5 ? this.rangeValue = this.translateNumber(this.rangeValue) - 0.2 : this.rangeValue <= 4
            if(this.rangeValue > 0.5 && this.rangeValue < 4){
              this.ctxCanvas.clearRect(0, 0, this.canvas.width, this.canvas.height);
              this.ctxCanvas.save();
              this.ctxCanvas.translate(this.canvas.width / 2 - this.img.width / 2 * this.rangeValue, this.canvas.height / 2 - this.img.height / 2 * this.rangeValue);
              this.ctxCanvas.scale(this.rangeValue, this.rangeValue);
              this.ctxCanvas.drawImage(this.img, 0, 0);
              this.ctxCanvas.restore();             
            }
            console.log("向下",this.rangeValue)
          }
        }
      } 
    }
  }
  </script>
  