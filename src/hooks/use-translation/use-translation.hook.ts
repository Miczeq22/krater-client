import { AppMessages } from '@i18n/messages/messages';
import { useLocale } from '../use-locale/use-locale.hook';

type StringOrArray = string | string[];

export const useTranslation = <T extends StringOrArray = string>(
  key: keyof typeof AppMessages | (keyof typeof AppMessages)[],
): T => {
  const { formatMessage } = useLocale();

  if (Array.isArray(key)) {
    return key.map((translationKey) => formatMessage({ id: translationKey })) as T;
  }

  return formatMessage({
    id: AppMessages[key as keyof typeof AppMessages],
  }) as T;
};
