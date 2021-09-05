import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  width: 100%;
`;

const AvatarHolder = styled.div`
  margin-right: ${({ theme }) => theme.spacing.medium};
`;

const NameHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.fontPrimary};
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.color.fontSecondary};
`;

const S = {
  Container,
  AvatarHolder,
  NameHolder,
  Name,
  Nickname,
};

export default S;
