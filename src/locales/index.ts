import type {
  ImportLocaleFn,
  LoadMessageFn,
  LocaleSetupOptions,
  SupportedLanguagesType,
} from "./typing";
import { i18n, loadI18nMessages, loadLocalesMap } from "./i18n";

let loadMessages: LoadMessageFn;

const $t = i18n.global.t;

async function loadLocaleMessages(lang: SupportedLanguagesType) {
  const mergeMessage = await loadMessages(lang);
  await loadI18nMessages(lang);
  i18n.global.mergeLocaleMessage(lang, mergeMessage);
}

async function setupI18n(options: LocaleSetupOptions = {}) {
  const { defaultLocale = "en-US" } = options;
  // app可以自行扩展一些第三方库和组件库的国际化
  loadMessages = options.loadMessages || (async () => ({}));
  await loadLocaleMessages(defaultLocale);

  // 在控制台打印警告
  i18n.global.setMissingHandler((locale, key) => {
    if (options.missingWarn && key.includes(".")) {
      console.warn(
        `[intlify] Not found '${key}' key in '${locale}' locale messages.`,
      );
    }
  });
}

export { $t, i18n, loadLocaleMessages, loadLocalesMap, setupI18n };
export { useI18n } from "vue-i18n";
export type { ImportLocaleFn, LocaleSetupOptions, SupportedLanguagesType };
export type { Locale } from "vue-i18n";
