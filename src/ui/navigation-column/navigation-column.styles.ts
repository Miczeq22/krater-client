import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  & > div::last-child {
    margin-bottom: 0;
  }
`;

const Item = styled.div``;

const S = {
  Container,
  Item,
};

export default S;
