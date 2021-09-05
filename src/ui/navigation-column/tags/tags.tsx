import { Card } from '@ui/card/card';
import { Button, Tag } from 'antd';
import { Link } from 'react-router-dom';
import S from './tags.styles';

export const Tags = () => (
  <S.Container>
    <S.TagsHeader>Recent Tags</S.TagsHeader>
    <Card>
      <S.TagList>
        <S.TagListItem>
          <Link to="/">
            <Tag color="cyan">#backend</Tag>
          </Link>
        </S.TagListItem>
        <S.TagListItem>
          <Link to="/">
            <Tag color="magenta">#architecture</Tag>
          </Link>
        </S.TagListItem>
        <S.TagListItem>
          <Link to="/">
            <Tag color="blue">#devops</Tag>
          </Link>
        </S.TagListItem>
        <S.TagListItem>
          <Link to="/">
            <Tag color="gold">#frontend</Tag>
          </Link>
        </S.TagListItem>
        <S.TagListItem>
          <Link to="/">
            <Tag color="purple">#enterprise</Tag>
          </Link>
        </S.TagListItem>
      </S.TagList>
      <Button type="primary">See more</Button>
    </Card>
  </S.Container>
);
