import { ReactNode } from 'react';
import { TopBar } from '@ui/topbar/topbar';
import S from './default-layout.styles';
import { Container } from '@ui/container/container';

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => (
  <S.PageLayout>
    <S.Header>
      <TopBar />
    </S.Header>
    <S.Body>
      <Container>{children}</Container>
    </S.Body>
    <S.Footer>Footer</S.Footer>
  </S.PageLayout>
);
