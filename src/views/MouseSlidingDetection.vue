<template>
  <div class="home">
    <div ref="scroll" class="scroll-Div" @scroll="scrollListenerCheckStatus" @touchend="scrollTouchend" @touchstart='scrollTouchstart'>
      <div class="scroll-Div--item" v-for="item in 200" :key="item.id">
        {{ item }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      isScrollYUnxing: false,
      isMousePressed: false

    }
  },
  components: {},
  methods: {
    // 检测滚动条当前状态
    scrollListenerCheckStatus: (function () {
      let preTop = -1
      let handler = null
      return function (event) {
        console.log('在滚动1')
        this.isScrollYUnxing = true
        let scroll = this.$refs.scroll
        let currentScrollTop = scroll.scrollTop
        window.clearTimeout(handler)
        handler = window.setTimeout(() => {
          if (currentScrollTop === preTop) {
            console.log('滚动停止了')
            if (this.isMousePressed) {
              console.log('滚动停止了---鼠标压下中')
            } else {
              console.log('滚动停止了---鼠标之前就松开了')
            }
            this.isScrollYUnxing = false
          } else {
            console.log('在滚动2')
            this.isScrollYUnxing = true
          }
        }, 50)
        preTop = currentScrollTop
      }
    }()),
    scrollTouchstart () {
      console.log('鼠标按压')
      this.isMousePressed = true
    },
    scrollTouchend () {
      console.log('鼠标离开')
      this.isMousePressed = false
      if (this.isScrollYUnxing) {
        console.log('鼠标离开,正在滚动')
      } else {
        console.log('鼠标离开，没有滚动')
      }
    }
  }

}
</script>
<style lang="scss" scoped>
  .scroll-Div{
    border: 1px solid red;
    height: 300px;
    overflow: scroll;
  }
  .scroll-Div--item {
    border: 1px solid #999;
    height: 40px;
  }
</style>
