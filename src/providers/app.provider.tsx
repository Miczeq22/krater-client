import { ReactNode } from 'react';
import { ThemeProvider } from '@theme/theme.provider';
import { BrowserRouter as Router } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => (
  <Router>
    <ThemeProvider>{children}</ThemeProvider>
  </Router>
);
