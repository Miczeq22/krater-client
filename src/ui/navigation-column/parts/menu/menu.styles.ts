import styled from 'styled-components';

interface NavigationListItemProps {
  active?: boolean;
}

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

  & > li:last-child {
    border-bottom: none;
  }
`;

const NavigationListItem = styled.li<NavigationListItemProps>`
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  position: relative;

  .anticon {
    margin-right: ${({ theme }) => theme.spacing.small};
  }

  & > a {
    color: ${({ theme, active }) => (active ? theme.color.primary : theme.color.fontSecondary)};
  }

  &::before {
    content: '';
    display: ${({ active = false }) => (active ? 'block' : 'none')};
    position: absolute;
    left: -20px;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.grey};
    cursor: pointer;
  }
`;

const S = {
  Container,
  MenuHeader,
  Navigation,
  NavigationList,
  NavigationListItem,
};

export default S;
