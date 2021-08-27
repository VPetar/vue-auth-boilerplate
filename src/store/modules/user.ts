import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
import { apiCall, api_routes } from "@/utils/api";
import { AUTH_LOGOUT } from "../actions/auth";
import { ActionTree } from 'vuex'

interface Profile {
  name?: string
}

interface User {
  status: string,
  profile: Profile
}

const state: User = { status: "", profile: {} };

const getters = {
  getProfile: (state: User) => state.profile,
  isProfileLoaded: (state: User) => !!state.profile.name
};

const actions = <ActionTree<User, any>> {
  [USER_REQUEST]: ({ commit, dispatch }) => {
    commit(USER_REQUEST);
    apiCall({ url: api_routes.user.me })
      .then(resp => {
        commit(USER_SUCCESS, resp);
      })
      .catch(err => {
        console.log(err);
        commit(USER_ERROR);
        // if resp is unauthorized, logout, too
        dispatch(AUTH_LOGOUT);
      });
  }
};

const mutations = {
  [USER_REQUEST]: (state: User) => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state: User, profile: Profile) => {
    state.status = "success";
    state.profile = profile;
  },
  [USER_ERROR]: (state: User) => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: (state: User) => {
    state.profile = {};
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
