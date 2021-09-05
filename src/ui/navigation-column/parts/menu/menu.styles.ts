import styled from 'styled-components';

const Container = styled.section``;

const MenuHeader = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.fontGrey};
`;

const Navigation = styled.nav``;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0 ${({ theme }) => theme.spacing.medium};

  & > li:last-child {
    border-bottom: none;
  }
`;

const NavigationListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  padding: ${({ theme }) => theme.spacing.medium} 0;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.color.fontSecondary};
`;

const S = {
  Container,
  MenuHeader,
  Navigation,
  NavigationList,
  NavigationListItem,
};

export default S;
