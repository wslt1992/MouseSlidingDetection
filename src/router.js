import Vue from 'vue'
import Router from 'vue-router'
import MouseSlidingDetection from './views/MouseSlidingDetection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: MouseSlidingDetection
    }
  ]
})
