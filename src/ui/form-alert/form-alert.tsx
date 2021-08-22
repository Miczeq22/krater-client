import S from './form-alert.styles';

interface Props {
  message: string;
  description: string;
  type: 'error' | 'info' | 'success' | 'warning';
}

export const FormAlert = (props: Props) => <S.Alert {...props} showIcon />;
