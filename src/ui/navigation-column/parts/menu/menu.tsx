import { BookFilled, HomeFilled, MessageFilled, ProfileFilled } from '@ant-design/icons';
import { Card } from '@ui/card/card';
import { Link } from 'react-router-dom';
import S from './menu.styles';

export const Menu = () => (
  <S.Container>
    <S.MenuHeader>Menu</S.MenuHeader>
    <Card>
      <S.Navigation>
        <S.NavigationList>
          <S.NavigationListItem active>
            <Link to="/">
              <HomeFilled /> Home
            </Link>
          </S.NavigationListItem>
          <S.NavigationListItem>
            <Link to="/">
              <BookFilled /> Blogs
            </Link>
          </S.NavigationListItem>
          <S.NavigationListItem>
            <Link to="/">
              <MessageFilled /> Messages
            </Link>
          </S.NavigationListItem>
          <S.NavigationListItem>
            <Link to="/">
              <ProfileFilled /> Profile
            </Link>
          </S.NavigationListItem>
        </S.NavigationList>
      </S.Navigation>
    </Card>
  </S.Container>
);
