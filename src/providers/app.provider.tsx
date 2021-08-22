import { ReactNode } from 'react';
import { ThemeProvider } from '@theme/theme.provider';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocaleProvider } from '@i18n/locale.provider';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => (
  <Router>
    <LocaleProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LocaleProvider>
  </Router>
);
