import { settings } from "@/settings";

interface Settings {
  appName: string
}

const state = <Settings>{
  appName: settings.APP_NAME
};

const getters = {
  appName: (state: Settings) => state.appName
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
