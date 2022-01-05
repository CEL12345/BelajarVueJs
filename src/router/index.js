import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Members from '../views/Members.vue'
import TestApi from '../views/TestApi.vue'
import Blog from '../views/Blog.vue'
import Destination from '../views/Destination.vue'
import Services from '../views/Services.vue'
const routes = 
[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
      path: '/contact',
      name: 'Contact',
      component: Contact
  },
    {
      path: '/members',
      name: 'Members',
      component: Members
  },
    {
      path: '/api',
      name: 'api',
      component: TestApi
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/destination',
      name: 'Destination',
      component: Destination
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    }
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router