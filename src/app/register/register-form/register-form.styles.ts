import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.base};
`;

const LoginText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const LoginLink = styled(Link)`
  text-decoration: underline;
`;

const S = {
  LogoContainer,
  LoginText,
  LoginLink,
};

export default S;
