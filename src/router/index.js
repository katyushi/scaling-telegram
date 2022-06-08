import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/person',
    name: 'person',
    component: () => import(/* webpackChunkName: "person" */ '../views/PersonView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
