import S from './form.styles';

interface Props
  extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  withSubtitle?: boolean;
}

// @ts-ignore
export const Form = ({ children, ...props }: Props) => <S.Form {...props}>{children}</S.Form>;
