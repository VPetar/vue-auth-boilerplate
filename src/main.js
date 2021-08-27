import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSnackbar from "vue-snack";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import ButtonSpinner from "@/components/globals/ButtonSpinner";
UIkit.use(Icons);
window.UIkit = UIkit;

// loads the Icon plugin
window._ = require("lodash");

require("./styles/index.scss");
require("vue-snack/dist/vue-snack.min.css");

// Vue.use(VueSnackbar, {});

// Vue.component("button-spinner", ButtonSpinner);

const app = createApp(App)
  .use(router)
  .use(router)
  .use(store);

app.component("button-spinner", ButtonSpinner);

app.mount("#app");
