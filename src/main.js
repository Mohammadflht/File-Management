import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import vuetify from "./vuetify";

/* import the fontawesome core */

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

// Call this action to get the data from localStorage on page load
store.dispatch('getUsersData');

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  // vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
