import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TTS",
    component: () => import("../views/TTSView/index.vue"),
    meta: {
      title: "TTS",
    },
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../views/SettingView/index.vue"),
    meta: {
      title: "Setting",
    },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
