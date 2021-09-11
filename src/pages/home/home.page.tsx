import { Tabs } from 'antd';
import { DefaultLayout } from 'src/layouts/default-layout/default-layout';
import { ArticleList } from './article-list/article-list';

export const HomePage = () => (
  <DefaultLayout>
    <Tabs>
      <Tabs.TabPane tab="Newest" key="1">
        <ArticleList />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Active" key="2" disabled>
        <ArticleList />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Favourite" key="3" disabled>
        <ArticleList />
      </Tabs.TabPane>
    </Tabs>
  </DefaultLayout>
);
