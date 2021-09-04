import { Logo } from '@ui/logo/logo';
import S from './topbar.styles';
import { PlusSquareOutlined } from '@ant-design/icons';
import { CircularImage } from '@ui/avatar/avatar';

export const TopBar = () => (
  <S.TopBarContainer>
    <S.LogoContainer>
      <Logo />
    </S.LogoContainer>
    <S.MenuContainer>
      <S.SearchInput placeholder="Search for articles, blogs or users..." />
      <S.CreateButton type="primary" icon={<PlusSquareOutlined />}>
        Create
      </S.CreateButton>
      <CircularImage size={50} />
    </S.MenuContainer>
  </S.TopBarContainer>
);
