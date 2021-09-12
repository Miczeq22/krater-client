import { Pagination, Tabs } from 'antd';
import { DefaultLayout } from 'src/layouts/default-layout/default-layout';
import { ArticleList } from './article-list/article-list';
import { HotArticles } from './hot-articles/hot-articles';
import S from './home.page.styles';

export const HomePage = () => (
  <DefaultLayout>
    <S.CarouselContainer>
      <HotArticles />
    </S.CarouselContainer>
    <S.Tabs>
      <Tabs.TabPane tab="Newest" key="1">
        <ArticleList />
        <Pagination defaultCurrent={1} total={10000} showSizeChanger={false} defaultPageSize={20} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Active" key="2" disabled>
        <ArticleList />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Favourite" key="3" disabled>
        <ArticleList />
      </Tabs.TabPane>
    </S.Tabs>
  </DefaultLayout>
);
