import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import headerApp from '../components/Header/Header'
import bannerApp from '../components/Banner/Banner'
import footerApp from '../components/Footer/Footer'
import containerApp from '../components/Container/Container'
import carouselApp from '../components/Carousel/Carousel' 
global.jQuery = jQuery
global.$ = jQuery
import readApp from '../components/Read/Read'
import ListApp from '../components/List/List'
import detailsApp from '../components/Details/Details'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/headerApp/',
      name: 'headerApp',
      component: headerApp
    },
    {
      path: '/bannerApp/',
      name: 'bannerrApp',
      component: bannerApp
    },
    {
      path: '/footerApp/',
      name: 'footerApp',
      component: footerApp
    },
    {
      path: '/containerApp/',
      name: 'containerApp',
      component: containerApp
    },
    {
      path: '/carouselApp/',
      name: 'carouselApp',
      component: carouselApp
    },
    {
      path: '/readApp/',
      name: 'readApp',
      component: readApp
    },
    {
      path: '/listApp/',
      name: 'listApp',
      component: ListApp
    },   
    {
      path: '/detailsApp/',
      name: 'detailsApp',
      component:detailsApp
    }
  ]
})
