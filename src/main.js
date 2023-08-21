import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import BlankPage from './components/BlankPage.vue'

Vue.use(VueRouter);

const routes =[
  {path: '/', component: LoginPage},
  {path: '/blank', component: BlankPage}
];

const router = new VueRouter({
  routes
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
