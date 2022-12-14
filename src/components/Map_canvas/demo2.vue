<template>
  <div>
    <canvas
      id="cvs"
      width="1920"
      height="750"
      style="backgroundcolor: #aaa"
    ></canvas>
    <div class="img" v-show="false"><img src="./img/map002.png"  alt=""></div>
    
  </div>
</template>


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
</style>
