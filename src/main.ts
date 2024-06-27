import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import "./styles.css";
import "uno.css";
import "element-plus/dist/index.css";
import router from "./router";
import { initStore } from "./store";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

(async () => {
  initStore();
  app.mount("#app");
})();
