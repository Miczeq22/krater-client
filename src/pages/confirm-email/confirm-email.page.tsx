import { InputContainer } from 'src/app/confirm-email/input-container/input-container';
import S from './confirm-email.page.styles';

export const ConfirmEmailPage = () => {
  const handleAuthCodeSubmit = () => {};

  return (
    <S.PageContainer>
      <InputContainer onSubmit={handleAuthCodeSubmit} loading={false} />
    </S.PageContainer>
  );
};
