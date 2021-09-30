import Vue from "vue";
import App from "./App.vue";
import Vue2TouchEvents from "vue2-touch-events";
import vuetify from "./plugins/vuetify";

Vue.use(Vue2TouchEvents, {
  // vuetifyと競合するのでv-my-touchで指定
  namespace: "my-touch",
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
