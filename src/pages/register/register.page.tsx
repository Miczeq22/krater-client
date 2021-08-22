import { RegisterForm, RegisterPayload } from 'src/app/register/register-form/register-form';
import { Container } from 'src/ui/container/container';
import S from './register.page.styles';
import { ReactComponent as RegisterIcon } from '@assets/register.svg';
import { useMutation } from 'react-query';
import { registerAction } from 'src/api/register/register.actions';
import { useState } from 'react';
import { getErrorFromMessage } from '@utils/get-message-from-error/get-message-from-error';
import { AxiosError } from 'axios';

export const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccessful, setIsSuccesful] = useState(false);

  const registerMutation = useMutation(registerAction);

  const onSubmit = async (values: Omit<RegisterPayload, 'confirmPassword'>) => {
    setErrorMessage(null);

    try {
      await registerMutation.mutateAsync(values);
      setIsSuccesful(true);
    } catch (error) {
      setIsSuccesful(false);
      setErrorMessage(getErrorFromMessage(error as AxiosError));
    }
  };

  return (
    <S.PageContainer>
      <Container>
        <S.InnerContainer>
          <S.IconContainer>
            <RegisterIcon />
          </S.IconContainer>
          <S.FormContainer>
            <RegisterForm
              onSubmit={onSubmit}
              loading={registerMutation.isLoading}
              errorMessage={errorMessage}
              isSuccessful={isSuccessful}
            />
          </S.FormContainer>
        </S.InnerContainer>
      </Container>
    </S.PageContainer>
  );
};
