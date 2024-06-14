import { createRouter, createWebHistory } from "vue-router";

import IEpMicrophone from "../assets/icons/iep/microphone.vue";
import IEpSettings from "../assets/icons/iep/settings.vue";

const routes = [
  {
    path: "/",
    name: "TTS",
    component: () => import("../views/TTSView/index.vue"),
    meta: {
      title: "TTS",
      icon: IEpMicrophone,
    },
  },
  {
    path: "/config",
    name: "Config",
    component: () => import("../views/ConfigView/index.vue"),
    meta: {
      title: "Config",
      icon: IEpSettings,
    },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
