import { LocaleContext, LocaleContextValueType } from '@i18n/locale.context';
import { useContext, useMemo } from 'react';
import { IntlShape, useIntl } from 'react-intl';

export const useLocale = (): IntlShape & LocaleContextValueType => {
  const intl = useIntl();
  const localeContext = useContext(LocaleContext);

  if (!localeContext) {
    throw new Error(
      'LocaleContext is unavailable, make sure you are using LocaleProvider context.',
    );
  }

  const locale = useMemo(
    () => ({
      ...intl,
      ...localeContext,
    }),
    [intl, localeContext],
  );

  return locale;
};
