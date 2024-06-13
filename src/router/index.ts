import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomeView/index.vue";
import Config from "../views/ConfigView/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/config",
    name: "Config",
    component: Config,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
