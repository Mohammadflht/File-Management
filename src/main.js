import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import AdminPanel from './components/AdminPanel.vue'
import UserManagement from './components/UserManagement.vue'
import UserGroup from './components/UserGroup.vue'
import StorageSpace from './components/StorageSpace.vue'
import FileManagement from './components/FileManagement.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faUserSecret, faTwitter, fas, fab)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.use(VueRouter);

const routes =[
  {path: '/', component: LoginPage},
  {path: '/admin-panel', component: AdminPanel},
  {path: '/admin-panel/user-management', component: UserManagement},
  {path: '/admin-panel/user-group', component: UserGroup},
  {path: '/admin-panel/storage-space', component: StorageSpace},
  {path: '/admin-panel/file-management', component: FileManagement},
];

const router = new VueRouter({
  routes
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
