import { AuthCodeInput } from '../auth-code-input/auth-code-input';
import { ReactComponent as LockIcon } from '@assets/unlock.svg';
import S from './input-container.styles';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { resendActivationCodeAction } from 'src/api/platform-access/platform-access.actions';
import { message } from 'antd';

const VALID_AUTH_CODE_LENGTH = 4;

interface Props {
  onSubmit: (authCode: string) => void;
  loading: boolean;
}

export const InputContainer = ({ onSubmit, loading }: Props) => {
  const resendActivationCodeMutation = useMutation(resendActivationCodeAction);
  const [authCode, setAuthCode] = useState('');

  const handleAuthCodeChange = (value: string) => {
    setAuthCode(value);
  };

  const handleAuthButtonSubmit = () => {
    if (authCode.length !== VALID_AUTH_CODE_LENGTH) {
      return;
    }

    onSubmit(authCode);
  };

  const handleResendActivationCode = async () => {
    await resendActivationCodeMutation.mutateAsync();

    message.success("We've send you activation code 🚀. Please, check your email! 📧");
  };

  return (
    <S.Container>
      <S.Header>
        <S.IconContainer>
          <LockIcon />
        </S.IconContainer>
        <S.Title>Enter the code</S.Title>
        <S.SubTitle>We sent a one-time code to your email address to confirm.</S.SubTitle>
      </S.Header>
      <S.Content>
        <AuthCodeInput onChange={handleAuthCodeChange} />
      </S.Content>
      <S.Footer>
        <S.Button
          type="primary"
          htmlType="button"
          disabled={authCode.length !== VALID_AUTH_CODE_LENGTH}
          loading={loading}
          onClick={handleAuthButtonSubmit}
        >
          Verify email
        </S.Button>
        <S.ResendText>
          Didn&apos;t receive code?{' '}
          <S.ResendButton
            type="link"
            onClick={handleResendActivationCode}
            disabled={resendActivationCodeMutation.isSuccess}
          >
            Send again
          </S.ResendButton>
        </S.ResendText>
      </S.Footer>
    </S.Container>
  );
};
