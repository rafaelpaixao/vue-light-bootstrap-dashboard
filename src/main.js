import "./registerServiceWorker";

import App from "./App.vue";
import LightBootstrap from "./light-bootstrap-main";
import Vue from "vue";
import router from "./router";
import store from "./store";

Vue.use(LightBootstrap);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
