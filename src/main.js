import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBQzwm2GLINntLMOiqBO7Itj8A6aE9dRpE",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
