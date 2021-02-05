/*jshint esversion: 8 */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faJs, faVuejs , faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from "@fortawesome/vue-fontawesome";
import "bootstrap";
import Vue from "vue";
import "../src/assets/main.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)

library.add(faJs, faVuejs, faFacebookF , faGoogle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
