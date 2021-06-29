import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/element.css'
var VueScrollTo = require('vue-scrollto');
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false
Vue.use(VueCookie);
Vue.use(VueScrollTo)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

