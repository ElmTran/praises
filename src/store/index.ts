import { ref } from "vue";
import { Store } from "tauri-plugin-store-api";
import { appConfigDir, join } from "@tauri-apps/api/path";
import { watch } from "tauri-plugin-fs-watch-api";
import { invoke } from "@tauri-apps/api";

export const store = ref();

export async function initStore() {
  const appConfigDirPath = await appConfigDir();
  const appConfigPath = await join(appConfigDirPath, ".config.dat");
  console.log("appConfigPath", appConfigPath);
  store.value = new Store(appConfigPath);
  await watch(appConfigPath, async () => {
    await store.value.load();
    await invoke("reload_store"); // 回调rust重新加载store
  });
}
