import { ReactNode } from 'react';
import S from './form-sub-title.styles';

interface Props {
  children: ReactNode;
}

export const FormSubTitle = ({ children }: Props) => (
  <S.SubTitle className="form-sub-title">{children}</S.SubTitle>
);
