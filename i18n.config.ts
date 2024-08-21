import eng from "./i18n/en.json";
import pol from "./i18n/pl.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: eng,
    pl: pol,
  },
}));
