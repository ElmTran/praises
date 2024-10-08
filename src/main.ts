import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import "./styles.scss";
import "uno.css";
import "element-plus/dist/index.css";
import router from "./router";
import { initStore } from "./store/config";
import { createPinia } from "pinia";
import { useSettingStore } from "./store/setting";
import { i18n } from "./locales";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(pinia);
app.use(i18n);

(async () => {
  await initStore();
  await useSettingStore().load();
  app.mount("#app");
})();
