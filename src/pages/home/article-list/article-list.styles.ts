import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.base};
`;

const S = {
  List,
  ListItem,
};

export default S;
