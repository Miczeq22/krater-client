import { ReactNode } from 'react';
import { ThemeProvider } from '@theme/theme.provider';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => <ThemeProvider>{children}</ThemeProvider>;
