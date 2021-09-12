import { FireOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { HotArticle } from '../hot-article/hot-article';
import S from './hot-articles.styles';

export const HotArticles = () => (
  <S.Container>
    <S.Title>
      <FireOutlined /> Popular Today
    </S.Title>
    <Carousel autoplay>
      <HotArticle />
      <HotArticle />
      <HotArticle />
      <HotArticle />
      <HotArticle />
    </Carousel>
  </S.Container>
);
