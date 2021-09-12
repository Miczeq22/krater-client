import styled from 'styled-components';

const Container = styled.section`
  height: 360px;
  color: #fff;
  background: #364d79;
  padding: ${({ theme }) => theme.spacing.base};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.radius.medium};
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
`;

const Author = styled.div`
  display: flex;
`;

const AuthorText = styled.div``;

const Nickname = styled.p``;

const Time = styled.span``;

const ActionItems = styled.div``;

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
};

export default S;
