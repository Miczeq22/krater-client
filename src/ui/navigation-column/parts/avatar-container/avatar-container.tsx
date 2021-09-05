import { CircularImage } from '@ui/avatar/avatar';
import { Card } from '@ui/card/card';
import S from './avatar-container.styles';

export const AvatarContainer = () => (
  <Card>
    <S.Container>
      <S.AvatarHolder>
        <CircularImage />
      </S.AvatarHolder>
      <S.NameHolder>
        <S.Name>john@gmail.com</S.Name>
        <S.Nickname>@johnny</S.Nickname>
      </S.NameHolder>
    </S.Container>
  </Card>
);
