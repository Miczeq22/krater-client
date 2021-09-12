import styled from 'styled-components';

const Container = styled.section`
  height: 360px;
  color: #fff;
  background: url('https://images.unsplash.com/photo-1550439062-609e1531270e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
  background-position: center;
  background-size: cover;
  padding: ${({ theme }) => theme.spacing.base};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.radius.medium};

  box-shadow: inset 0 0 0 1000px rgba(54, 77, 121, 0.5);
`;

const Tags = styled.ul`
  list-style: none;
`;

const TagItem = styled.li`
  .ant-tag {
    font-size: ${({ theme }) => theme.fontSize.small};
    padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  }
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xbig};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Footer = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Author = styled.div`
  display: flex;
`;

const AuthorText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing.xmedium};
`;

const Nickname = styled.p`
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Time = styled.span`
  color: ${({ theme }) => theme.color.fontGrey};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const ActionItems = styled.div`
  display: flex;

  & > p:first-child {
    margin-right: ${({ theme }) => theme.spacing.xmedium};
  }
`;

const ActionItem = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const S = {
  Container,
  Tags,
  TagItem,
  Content,
  Title,
  Footer,
  Author,
  AuthorText,
  Nickname,
  Time,
  ActionItems,
  ActionItem,
};

export default S;
