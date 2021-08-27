import { createRouter, createWebHistory, NavigationGuard } from "vue-router";
import store from "../store";
import Login from "@/views/auth/login/index.vue";
import Register from "@/views/auth/register/index.vue";
import App from "@/views/layouts/App/index.vue";
import Home from "@/views/Home.vue";

const ifNotAuthenticated: NavigationGuard = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated: NavigationGuard = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
    path: "/",
    name: "app",
    component: App,
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    beforeEnter: ifNotAuthenticated
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
