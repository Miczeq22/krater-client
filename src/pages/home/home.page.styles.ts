import { Tabs as AntdTabs } from 'antd';
import styled from 'styled-components';

const CarouselContainer = styled.section`
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const Tabs = styled(AntdTabs)`
  .ant-tabs-tab {
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const S = {
  CarouselContainer,
  Tabs,
};

export default S;
