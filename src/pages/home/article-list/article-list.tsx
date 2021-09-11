import { Article } from '../article/article';
import S from './article-list.styles';

export const ArticleList = () => (
  <S.List>
    <S.ListItem>
      <Article />
    </S.ListItem>
    <S.ListItem>
      <Article />
    </S.ListItem>
    <S.ListItem>
      <Article />
    </S.ListItem>
  </S.List>
);
