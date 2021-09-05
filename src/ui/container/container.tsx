import { ReactNode } from 'react';
import S from './container.styles';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => (
  <S.Container className="app-container">{children}</S.Container>
);
