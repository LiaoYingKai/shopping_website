// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faShoppingCart,
  faTimes,
  faPen
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLocalStorage from 'vue-localstorage';
import VueLocation from 'vue-location'

Vue.use(VueLocation);
Vue.use(VueLocalStorage)
Vue.use(ElementUI);
library.add(faShoppingCart, faTimes, faPen)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})