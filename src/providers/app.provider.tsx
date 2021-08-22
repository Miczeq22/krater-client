import { ReactNode } from 'react';
import { ThemeProvider } from '@theme/theme.provider';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocaleProvider } from '@i18n/locale.provider';
import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <Router>
      <LocaleProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryClientProvider>
      </LocaleProvider>
    </Router>
  );
};
