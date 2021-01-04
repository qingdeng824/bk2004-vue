import Vue from 'vue'
import VueRouter from 'vue-router'

import filmRouter from "./routes/film"
import centerRouter from "./routes/center";
import cinemaRouter from "./routes/cinema"


Vue.use(VueRouter)

const routes = [
  { path :'/', redirect: '/films/nowPlaying' },
  
  ...filmRouter,
  centerRouter,
  cinemaRouter
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
