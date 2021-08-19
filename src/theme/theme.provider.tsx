import { ReactNode } from 'react';
import { GlobalStyles } from '@styles/global.styles';
import { ResetStyles } from '@styles/reset.styles';
import { theme } from '@styles/theme-config';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
