import { theme } from '@styles/theme-config';
import ReactCodeInput from 'react-code-input';

interface Props {
  onChange: (value: string) => void;
}

export const AuthCodeInput = ({ onChange }: Props) => (
  <ReactCodeInput
    autoFocus
    onChange={onChange}
    inputStyle={{
      fontFamily: 'Montserrat',
      width: '50px',
      margin: '0 3px',
      borderRadius: theme.radius.medium,
      height: '60px',
      fontSize: '18px',
      border: ' none',
      backgroundColor: theme.color.grey,
      textAlign: 'center',
    }}
    name="auth-code-input"
    inputMode="latin"
  />
);
