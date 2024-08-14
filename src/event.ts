// events.js
import { listen } from "@tauri-apps/api/event";
import router from "./router";

const events = {
  openSettings: "open-settings",
};

const registerEvents = () => {
  listen(events.openSettings, () => {
    router.push("/setting");
  });
};

export { registerEvents, events };
