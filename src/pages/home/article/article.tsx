import { CommentOutlined, EllipsisOutlined, LikeOutlined } from '@ant-design/icons';
import { CircularImage } from '@ui/avatar/avatar';
import { Card } from '@ui/card/card';
import { Button } from 'antd';
import S from './article.styles';

export const Article = () => (
  <Card>
    <S.Header>
      <S.ProfileContainer>
        <CircularImage />
        <S.TextContainer>
          <S.Nickname>John Doe</S.Nickname>
          <S.Time>12 hours ago</S.Time>
        </S.TextContainer>
      </S.ProfileContainer>
      <S.OptionsContainer>
        <Button type="dashed">
          <EllipsisOutlined />
        </Button>
      </S.OptionsContainer>
    </S.Header>
    <S.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel rhoncus arcu, in venenatis
      ex. Aenean eu sapien lacinia, scelerisque sapien sed, rutrum mi. Quisque eget ante leo. Donec
      venenatis nulla eget eros congue commodo. Suspendisse et nibh cursus, venenatis est quis,
      rhoncus nibh. Nulla vel magna facilisis enim tincidunt tempor nec vel justo. Curabitur sit
      amet molestie dolor, id rhoncus lacus. Pellentesque in erat volutpat, tristique massa id,
      tempus elit. Pellentesque sed porttitor neque. Integer egestas neque ut semper cursus.
    </S.Body>
    <S.Footer>
      <Button type="link">
        <LikeOutlined />3 Likes
      </Button>
      <Button type="link">
        <CommentOutlined /> 5 Comments
      </Button>
    </S.Footer>
  </Card>
);
