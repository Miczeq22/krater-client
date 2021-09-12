import { DESKTOP_CONTAINER_WIDTH } from '@styles/theme-config';
import styled from 'styled-components';

const Container = styled.section`
  padding: 0 ${({ theme }) => theme.appGlobalMargin.default};
  max-width: ${() => `${DESKTOP_CONTAINER_WIDTH}px`};
`;

const S = { Container };

export default S;
