import S from './navigation-column.styles';
import { AvatarContainer } from './parts/avatar-container/avatar-container';
import { Menu } from './parts/menu/menu';
import { Tags } from './tags/tags';

export const NavigationColumn = () => (
  <S.Container className="navigation-column">
    <S.Item>
      <AvatarContainer />
    </S.Item>
    <S.Item>
      <Menu />
    </S.Item>
    <S.Item>
      <Tags />
    </S.Item>
  </S.Container>
);
