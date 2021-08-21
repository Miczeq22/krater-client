import styled from 'styled-components';

const Title = styled.h2`
  color: ${({ theme }) => theme.color.fontPrimary};
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

const S = {
  Title,
};

export default S;
