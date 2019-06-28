import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from 'pages/Home'
import Classify from 'pages/classify'
import Shoppingcar from 'pages/shoppingcar'
import My from 'pages/my'

export default new Router({
  routes: [
    {
      path: '/home',
      
      component: Home
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/shoppingcar',
      component: Shoppingcar
    },
    {
      path: '/my',
      component: My
    },
  ]
})
