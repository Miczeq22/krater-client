import { RegisterForm, RegisterPayload } from 'src/app/register/register-form/register-form';
import { Container } from 'src/ui/container/container';
import S from './register.page.styles';
import { ReactComponent as RegisterIcon } from '@assets/register.svg';
import { useMutation } from 'react-query';
import { useState } from 'react';
import { getErrorFromMessage } from '@utils/get-message-from-error/get-message-from-error';
import { AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import { registerAction } from 'src/api/platform-access/platform-access.actions';

export const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const history = useHistory();

  const registerMutation = useMutation(registerAction);

  const onSubmit = async (values: Omit<RegisterPayload, 'confirmPassword'>) => {
    setErrorMessage(null);

    try {
      await registerMutation.mutateAsync(values);
      message.success(
        'Account created successfuly, now please check your email and confirm your email address.',
      );
      history.push('/login');
    } catch (error) {
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
            />
          </S.FormContainer>
        </S.InnerContainer>
      </Container>
    </S.PageContainer>
  );
};
