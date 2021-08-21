import { LoginForm } from 'src/app/login/login-form/login-form';
import S from './login.page.styles';
import { ReactComponent as LoginIcon } from '@assets/login.svg';
import { Container } from 'src/ui/container/container';

export const LoginPage = () => {
  const onSubmit = () => {};

  return (
    <S.PageContainer>
      <Container>
        <S.InnerContainer>
          <S.IconContainer>
            <LoginIcon />
          </S.IconContainer>
          <S.FormContainer>
            <LoginForm onSubmit={onSubmit} />
          </S.FormContainer>
        </S.InnerContainer>
      </Container>
    </S.PageContainer>
  );
};
