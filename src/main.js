import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import AdminPanel from './components/AdminPanel.vue'

Vue.use(VueRouter);

const routes =[
  {path: '/', component: LoginPage},
  {path: '/admin-panel', component: AdminPanel}
];

const router = new VueRouter({
  routes
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
