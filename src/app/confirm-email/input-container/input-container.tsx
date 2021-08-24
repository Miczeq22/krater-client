import { AuthCodeInput } from '../auth-code-input/auth-code-input';
import { ReactComponent as LockIcon } from '@assets/unlock.svg';
import S from './input-container.styles';
import { useState } from 'react';

const VALID_AUTH_CODE_LENGTH = 4;

interface Props {
  onSubmit: (authCode: string) => void;
  loading: boolean;
}

export const InputContainer = ({ onSubmit, loading }: Props) => {
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
      </S.Footer>
    </S.Container>
  );
};
