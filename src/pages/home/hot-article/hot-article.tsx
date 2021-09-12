import { CommentOutlined, LikeOutlined } from '@ant-design/icons';
import { theme } from '@styles/theme-config';
import { CircularImage } from '@ui/avatar/avatar';
import { Tag } from 'antd';
import S from './hot-article.styles';

export const HotArticle = () => (
  <S.Container>
    <S.Tags>
      <S.TagItem>
        <Tag color={theme.color.fontBlack}>#architecture</Tag>
        <Tag color={theme.color.fontBlack}>#devops</Tag>
      </S.TagItem>
    </S.Tags>
    <S.Content>
      <S.Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</S.Title>
      <S.Footer>
        <S.Author>
          <CircularImage />
          <S.AuthorText>
            <S.Nickname>John Doe</S.Nickname>
            <S.Time>2 hours ago</S.Time>
          </S.AuthorText>
        </S.Author>
        <S.ActionItems>
          <LikeOutlined /> 85 Likes
          <CommentOutlined /> 103 Comments
        </S.ActionItems>
      </S.Footer>
    </S.Content>
  </S.Container>
);
