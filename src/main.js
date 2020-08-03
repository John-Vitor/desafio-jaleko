
import Vue from "vue";
import App from "./App";
import VueYoutube from 'vue-youtube';

Vue.use(VueYoutube);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
