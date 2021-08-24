import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
      background-color: ${({ theme }) => theme.color.background};
      font-family: ${({ theme }) => theme.fontFamily.primary};
  }
`;
