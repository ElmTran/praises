import { createRouter, createWebHistory } from "vue-router";

import Main from "../views/MainView/index.vue";
import Config from "../views/ConfigView/index.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
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
