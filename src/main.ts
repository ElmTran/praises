import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import "./styles.css";
import "element-plus/dist/index.css";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount("#app");
