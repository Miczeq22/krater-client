import styled from 'styled-components';

const PageLayout = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
`;

const Body = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.base};

  & > .social-column,
  & > .navigation-column {
    flex: 1;
    max-width: 350px;
  }

  & > .app-container {
    flex: 3;
  }
`;

const Footer = styled.footer``;

const S = {
  PageLayout,
  Header,
  Body,
  Footer,
};

export default S;
