import { settings } from "@/settings";
const state = {
  appName: settings.APP_NAME
};

const getters = {
  appName: state => state.appName
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
