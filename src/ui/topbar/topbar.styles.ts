import { Button, Input } from 'antd';
import styled from 'styled-components';

const TopBarContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.base};
`;

const LogoContainer = styled.section``;

const MenuContainer = styled.menu`
  display: flex;
  align-items: center;
`;

const SearchInput = styled(Input.Search)`
  height: 50px;
  min-width: 200px;
  border-radius: ${({ theme }) => theme.radius.medium};
  font-size: ${({ theme }) => theme.fontSize.small};

  input {
    height: 50px;
    min-width: 300px;
    border-radius: ${({ theme }) => theme.radius.medium};
  }

  .ant-btn {
    height: 50px;
    width: 70px;
    border-top-right-radius: ${({ theme }) => theme.radius.medium} !important;
    border-bottom-right-radius: ${({ theme }) => theme.radius.medium} !important;
  }
`;

const CreateButton = styled(Button)`
  margin: 0 ${({ theme }) => theme.spacing.medium};
  height: 50px;
  border-radius: ${({ theme }) => theme.radius.medium};
  min-width: 120px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  .anticon {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;

const S = {
  TopBarContainer,
  LogoContainer,
  MenuContainer,
  SearchInput,
  CreateButton,
};

export default S;
