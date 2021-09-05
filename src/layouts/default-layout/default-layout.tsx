import { ReactNode } from 'react';
import { TopBar } from '@ui/topbar/topbar';
import S from './default-layout.styles';
import { Container } from '@ui/container/container';
import { NavigationColumn } from '@ui/navigation-column/navigation-column';
import { SocialColumn } from '@ui/social-column/social-column';

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => (
  <S.PageLayout>
    <S.Header>
      <TopBar />
    </S.Header>
    <S.Body>
      <NavigationColumn />
      <Container>{children}</Container>
      <SocialColumn />
    </S.Body>
    <S.Footer>Footer</S.Footer>
  </S.PageLayout>
);
