import { setEmailConfirmed } from '@context/auth/auth.actions-creators';
import { getErrorFromMessage } from '@utils/get-message-from-error/get-message-from-error';
import { message } from 'antd';
import { useMutation } from 'react-query';
import { confirmEmailAction } from 'src/api/platform-access/platform-access.actions';
import { InputContainer } from 'src/app/confirm-email/input-container/input-container';
import { useAuthState } from 'src/hooks/use-auth-state/use-auth-state.hook';
import S from './confirm-email.page.styles';

export const ConfirmEmailPage = () => {
  const { dispatch } = useAuthState();
  const confirmEmailMutation = useMutation(confirmEmailAction);

  const handleAuthCodeSubmit = async (activationCode: string) => {
    try {
      await confirmEmailMutation.mutateAsync(activationCode);

      message.success('Good job! Email confirmed successfuly! 🚀 😎');
      dispatch(setEmailConfirmed());
    } catch (error) {
      message.error(getErrorFromMessage(error));
    }
  };

  return (
    <S.PageContainer>
      <InputContainer onSubmit={handleAuthCodeSubmit} loading={confirmEmailMutation.isLoading} />
    </S.PageContainer>
  );
};
