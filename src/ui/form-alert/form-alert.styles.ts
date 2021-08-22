import { Alert as AntdAlert } from 'antd';
import styled from 'styled-components';

const Alert = styled(AntdAlert)`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const S = {
  Alert,
};

export default S;
