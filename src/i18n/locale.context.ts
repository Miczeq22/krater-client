import { createContext } from 'react';

export enum AppLocale {
  en = 'en',
}

export type LocaleContextValueType = {
  defaultLocale: AppLocale;
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
};

export const DEFAULT_LOCALE: AppLocale =
  (process.env.REACT_APP_DEFAULT_LOCALE as AppLocale) ?? AppLocale.en;

export const LocaleContext = createContext<LocaleContextValueType | undefined>(undefined);
