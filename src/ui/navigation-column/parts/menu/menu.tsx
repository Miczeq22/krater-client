import { Card } from '@ui/card/card';
import S from './menu.styles';

export const Menu = () => (
  <S.Container>
    <S.MenuHeader>Menu</S.MenuHeader>
    <Card>
      <S.Navigation>
        <S.NavigationList>
          <S.NavigationListItem>Home</S.NavigationListItem>
          <S.NavigationListItem>Blogs</S.NavigationListItem>
          <S.NavigationListItem>Messages</S.NavigationListItem>
          <S.NavigationListItem>Profile</S.NavigationListItem>
        </S.NavigationList>
      </S.Navigation>
    </Card>
  </S.Container>
);
