import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegistrationText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const RegistrationLink = styled(Link)`
  text-decoration: underline;
`;

const S = {
  RegistrationLink,
  RegistrationText,
};

export default S;
