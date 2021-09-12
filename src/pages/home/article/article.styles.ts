import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.color.fontPrimary};
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const ProfileContainer = styled.section`
  display: flex;
`;

const TextContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacing.xmedium};
`;

const Nickname = styled.p`
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.fontPrimary};
`;

const Time = styled.span`
  color: ${({ theme }) => theme.color.fontGrey};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const OptionsContainer = styled.section``;

const Body = styled.section`
  color: ${({ theme }) => theme.color.fontBlack};
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const Footer = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.xmedium};

  & > button {
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  & > button:first-child {
    margin-right: ${({ theme }) => theme.spacing.medium};
  }
`;

const S = {
  Header,
  Title,
  ProfileContainer,
  TextContainer,
  Nickname,
  Time,
  OptionsContainer,
  Body,
  Footer,
};

export default S;
