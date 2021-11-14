import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Routes from "./router/routes";
import PincodeInput from "vue-pincode-input";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify)
const vuetify = new Vuetify()

Vue.config.productionTip = false;
Vue.config.ignoredElements = [
  "field",
  "block",
  "category",
  "xml",
  "mutation",
  "value",
  "sep",
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: Routes,
});

Vue.component("PincodeInput", PincodeInput);

new Vue({
  render: (h) => h(App),
  router: router,
  vuetify,
}).$mount("#app");
