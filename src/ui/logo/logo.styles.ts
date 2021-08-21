import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)``;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xbig};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.color.fontPrimary};
`;

const LightLetter = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

const S = {
  Logo,
  LightLetter,
  Link,
};

export default S;
