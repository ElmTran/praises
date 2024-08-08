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
import { setupI18n } from "./locales";

const pinia = createPinia();
const app = createApp(App);

await setupI18n(app);

app.use(router);
app.use(ElementPlus);
app.use(pinia);

(async () => {
  initStore();
  useSettingStore().load();
  app.mount("#app");
})();
