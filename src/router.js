import Vue from 'vue'
import Router from 'vue-router'
import sellCat from '@/page/sellCat.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sellCat',
      component: sellCat
    }
  ]
})
