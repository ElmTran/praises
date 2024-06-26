import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TTS",
    component: () => import("../views/TTSView/index.vue"),
    meta: {
      title: "TTS",
      icon: "i-ep-microphone",
    },
  },
  {
    path: "/config",
    name: "Config",
    component: () => import("../views/ConfigView/index.vue"),
    meta: {
      title: "Config",
      icon: "i-ep-tools",
    },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
