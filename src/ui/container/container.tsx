import { ReactNode } from 'react';
import S from './container.styles';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => <S.Container>{children}</S.Container>;
