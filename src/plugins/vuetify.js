import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi"
      },
      theme: {
        themes: {
          light: {
            primary: "#e2971b",
            secondary: "#50360a",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107"
          }
        }
      }
});
