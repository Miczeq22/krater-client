/* eslint-disable no-param-reassign */
import { AppLocale } from '@i18n/locale.context';
import enMessages from './en';

type KeyAsValue<T> = { [P in keyof T]: P };

export const keysToValues = <T extends Record<string, string | object>>(
  source: T,
): KeyAsValue<typeof source> =>
  (Object.keys(source) as Array<keyof T>).reduce((accumulated, current) => {
    accumulated[current] = current;
    return accumulated;
  }, {} as KeyAsValue<typeof source>);

export const AppMessages = {
  ...keysToValues(enMessages),
};

export const translations: Record<AppLocale, Record<keyof typeof AppMessages, string>> = {
  [AppLocale.en]: enMessages as Record<string, string>,
};
