import S from './avatar.styles';

interface Props {
  imageUrl?: string | null;
  size?: number;
  className?: string;
}

export const CircularImage = ({ className, imageUrl, size = 50 }: Props) => (
  <S.Image size={size} className={className}>
    {!imageUrl && <S.Placeholder />}
  </S.Image>
);
