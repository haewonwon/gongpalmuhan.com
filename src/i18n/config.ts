export const locales = ["ko", "en"] as const;
export const enabledLocales = ["ko"] as const;
export const defaultLocale = "ko";

export type Locale = (typeof locales)[number];
export type EnabledLocale = (typeof enabledLocales)[number];

export function isEnabledLocale(locale: string): locale is EnabledLocale {
  return enabledLocales.includes(locale as EnabledLocale);
}
