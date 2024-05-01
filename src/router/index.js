import { createRouter, createWebHistory } from 'vue-router'
import ImagesGallery from '../views/ImagesGallery.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: <ImagesGallery  color="/"/>
  },
  {
    path: '/gray',
    name: 'gray',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: <ImagesGallery color="/g/"/>
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
