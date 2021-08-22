import { useState, ReactNode } from 'react';
import { AppLocale, DEFAULT_LOCALE, LocaleContext } from './locale.context';
import { IntlProvider } from 'react-intl';
import { translations } from './messages/messages';

interface Props {
  children: ReactNode;
}

export const LocaleProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState<AppLocale>(DEFAULT_LOCALE);

  return (
    <IntlProvider defaultLocale={DEFAULT_LOCALE} locale={locale} messages={translations[locale]}>
      <LocaleContext.Provider
        value={{
          locale,
          setLocale,
          defaultLocale: DEFAULT_LOCALE,
        }}
      >
        {children}
      </LocaleContext.Provider>
    </IntlProvider>
  );
};
