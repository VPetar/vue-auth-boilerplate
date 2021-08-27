import Vuex from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";
import settings from "./modules/settings";

const debug = process.env.NODE_ENV !== "production";

export default Vuex.createStore({
  modules: {
    auth,
    user,
    settings
  },
  strict: debug
});
