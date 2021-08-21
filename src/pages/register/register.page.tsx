import { RegisterForm } from 'src/app/register/register-form/register-form';
import { Container } from 'src/ui/container/container';
import S from './register.page.styles';
import { ReactComponent as RegisterIcon } from '@assets/register.svg';

export const RegisterPage = () => {
  const onSubmit = () => {};

  return (
    <S.PageContainer>
      <Container>
        <S.InnerContainer>
          <S.IconContainer>
            <RegisterIcon />
          </S.IconContainer>
          <S.FormContainer>
            <RegisterForm onSubmit={onSubmit} />
          </S.FormContainer>
        </S.InnerContainer>
      </Container>
    </S.PageContainer>
  );
};
