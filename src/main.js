import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import { v4 as uuidv4 } from 'uuid';
// Vue.prototype.$uuid = uuidv4;

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


// Call this action to get the data from localStorage on page load
store.dispatch('getUsersData');

/* add icons to the library */
library.add(faUserSecret, faTwitter, fas, fab)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)









Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
