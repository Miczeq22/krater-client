import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';

const Image = styled.div<{
  imageUrl?: string | null;
  size: number;
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-color: ${({ theme }) => theme.color.fontSecondary};
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.color.white};
  background-position: center;
  background-size: cover;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: center;

  & > span {
    width: 50%;
    height: 50%;

    & > svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const Placeholder = styled(UserOutlined)`
  width: 100%;
  height: 100%;
`;

export default { Placeholder, Image };
