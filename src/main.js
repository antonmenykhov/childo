import Vue from 'vue'
import VueJivoSite from '@bchteam/vue-jivosite'
export const eventBus = new Vue(); 
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/element.css'
var VueScrollTo = require('vue-scrollto');
import VueCookie from 'vue-cookie'
import VuePageTransition from 'vue-page-transition'
import vueVimeoPlayer from 'vue-vimeo-player'

Vue.config.productionTip = false
Vue.use(VueCookie);
Vue.use(VueScrollTo)
Vue.use(VuePageTransition)
Vue.use(vueVimeoPlayer)
Vue.use(VueJivoSite, {widgetId: '09qm97FjaG'})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

