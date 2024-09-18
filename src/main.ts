import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import Web from './components/Web.vue'
import Mobile from './components/Mobile.vue'
import Desktop from './components/Desktop.vue'




const routes = [
  { path: '/', component: Web, alias: '/web', name: 'Web' },
  { path: '/mobile', component: Mobile, name: 'Mobile' },
  { path: "/desktop", component: Desktop, name: 'Desktop' },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
