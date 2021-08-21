import styled from 'styled-components';

const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.fontGrey};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.regular};
`;

const S = {
  SubTitle,
};

export default S;
