import 'styled-components';
import { theme } from '@styles/theme-config';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type AppAction<K, V = void> = V extends void ? { type: K } : { type: K } & V;
