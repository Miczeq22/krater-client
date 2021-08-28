import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

const Container = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.base};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.medium};
  border: 1px solid ${({ theme }) => theme.color.grey};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;

  & > svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.primary};
  }
`;

const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.color.fontPrimary};
  font-size: ${({ theme }) => theme.fontSize.big};
  margin: ${({ theme }) => `${theme.spacing.medium} 0`};
`;

const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.fontSecondary};
  font-size: ${({ theme }) => theme.fontSize.regular};
  text-align: center;
  margin: ${({ theme }) => `${theme.spacing.medium} 0`};
`;

const Content = styled.section`
  padding: ${({ theme }) => `${theme.spacing.medium} 0`};
`;

const Footer = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled(AntdButton)`
  border-radius: ${({ theme }) => theme.radius.medium};
  min-width: 200px;
  height: 50px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

const ResendText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.fontSecondary};
`;

const ResendButton = styled(Button)`
  margin: 0;
  padding: 0;
  min-width: auto;
`;

const S = {
  Container,
  Header,
  IconContainer,
  Title,
  SubTitle,
  Content,
  Footer,
  Button,
  ResendText,
  ResendButton,
};

export default S;
