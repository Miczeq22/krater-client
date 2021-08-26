import { LoginForm, LoginPayload } from 'src/app/login/login-form/login-form';
import S from './login.page.styles';
import { ReactComponent as LoginIcon } from '@assets/login.svg';
import { Container } from 'src/ui/container/container';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { getErrorFromMessage } from '@utils/get-message-from-error/get-message-from-error';
import { useAuthState } from 'src/hooks/use-auth-state/use-auth-state.hook';
import { setAccessToken } from '@context/auth/auth.actions-creators';
import { loginAction } from 'src/api/platform-access/platform-access.actions';

export const LoginPage = () => {
  const { dispatch } = useAuthState();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loginMutation = useMutation(loginAction);

  const onSubmit = async (values: LoginPayload) => {
    try {
      const response = await loginMutation.mutateAsync(values);

      dispatch(setAccessToken(response.data.accessToken));
    } catch (error) {
      setErrorMessage(getErrorFromMessage(error));
    }
  };

  return (
    <S.PageContainer>
      <Container>
        <S.InnerContainer>
          <S.IconContainer>
            <LoginIcon />
          </S.IconContainer>
          <S.FormContainer>
            <LoginForm
              onSubmit={onSubmit}
              errorMessage={errorMessage}
              loading={loginMutation.isLoading}
            />
          </S.FormContainer>
        </S.InnerContainer>
      </Container>
    </S.PageContainer>
  );
};
