import { ReactNode } from 'react';
import S from './card.styles';

interface Props {
  children: ReactNode;
}

export const Card = ({ children }: Props) => <S.Card className="app-card">{children}</S.Card>;
