import {
  AUTH_REQUEST,
  AUTH_SIGNUP,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from "@/store/actions/auth";
import { USER_REQUEST } from "../actions/user";
import { apiCall, api_routes } from "@/utils/api";
import router from "./../../router";
import { ActionTree } from 'vuex'

interface Auth {
  token: string,
  status: string,
  hasLoadedOnce: boolean
}

const state = <Auth>{
  token: localStorage.getItem("user-token") || "",
  status: "",
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: (state: Auth) => !!state.token,
  authStatus: (state: Auth) => state.status
};

const actions = <ActionTree<Auth, any>> {
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      apiCall({ url: api_routes.user.login, data: user, method: "post" })
        .then((resp: any) => {
          localStorage.setItem("user-token", resp.token);
          // Here set the header of your ajax library to the token value.
          // example with axios
          // axios.defaults.headers.common['Authorization'] = resp.token
          commit(AUTH_SUCCESS, resp);
          dispatch(USER_REQUEST);
          resolve(resp);
        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          localStorage.removeItem("user-token");
          reject(err);
        });
    });
  },
  [AUTH_SIGNUP]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      apiCall({ url: api_routes.user.signup, data: user, method: "post" })
        .then(resp => {
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise<void>(resolve => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem("user-token");
      router.push("/login");
      resolve();
    });
  }
};

const mutations = {
  [AUTH_REQUEST]: (state: Auth) => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state: Auth, resp: any) => {
    state.status = "success";
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: (state: Auth) => {
    state.status = "error";
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: (state: Auth) => {
    state.token = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
