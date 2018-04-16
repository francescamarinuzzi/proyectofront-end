import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Comics from './components/Comics.vue'
import Characters from './components/Characters.vue'
import Creators from './components/Creators.vue'
import Events from './components/Events.vue'
import Series from './components/Series.vue'


import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'app', component: App},
  { path: '/comics', name: 'comics', component: Comics},
  { path: '/characters', name: 'characters', component: Characters},
  { path: '/creators', name: 'creators', component: Creators},
  { path: '/events', name: 'events', component: Events},
  { path: '/series', name: 'series', component: Series},
  
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
