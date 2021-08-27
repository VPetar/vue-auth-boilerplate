import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Login from "@/views/auth/login";
import Register from "@/views/auth/register";
import App from "@/views/layouts/App";
import Home from "@/views/Home";

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
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
