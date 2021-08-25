import { ReactNode } from 'react';
import { ThemeProvider } from '@theme/theme.provider';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocaleProvider } from '@i18n/locale.provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './auth.providers';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <Router>
      <LocaleProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </LocaleProvider>
    </Router>
  );
};
