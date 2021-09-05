import styled from 'styled-components';

const Card = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.radius.medium};
`;

const S = { Card };

export default S;
