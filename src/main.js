import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import * as VueGoogleMaps from 'vue2-google-maps';

window.axios = axios
// axios.defaults.baseURL = 'http://127.0.0.1:8081'
axios.defaults.baseURL = 'https://joe-flask-app.herokuapp.com/'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDUu9Vn4zdVx4vy6PjS5hwcRSP151TUQyM',
    libraries: 'places',
  },
})


Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
