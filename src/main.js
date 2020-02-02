import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

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
}).$mount("#app");
