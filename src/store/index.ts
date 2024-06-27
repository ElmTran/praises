import { ref } from "vue";
import { Store } from "tauri-plugin-store-api";
import { appConfigDir, join } from "@tauri-apps/api/path";
import { watch } from "tauri-plugin-fs-watch-api";
import { invoke } from "@tauri-apps/api";

async function appConfigPath() {
  const appConfigDirPath = await appConfigDir();
  return await join(appConfigDirPath, ".config.dat");
}

export const store = ref(new Store(await appConfigPath()));

export async function initStore() {
  await watch(await appConfigPath(), async () => {
    await store.value.load();
    await invoke("reload_store");
  });
}
