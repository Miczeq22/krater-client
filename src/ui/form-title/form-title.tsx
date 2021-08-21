import { ReactNode } from 'react';
import S from './form-title.styles';

interface Props {
  children: ReactNode;
}

export const FormTitle = ({ children }: Props) => (
  <S.Title className="form-title">{children}</S.Title>
);
