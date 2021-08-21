import { ReactNode, useMemo } from 'react';
import { CSSProperties } from 'styled-components';
import S from './formik-field.styles';

export interface Props {
  children: ReactNode;
  label?: {
    for: string;
    label: string | JSX.Element;
  };
  touched?: boolean;
  error?: string;
  style?: CSSProperties;
  className?: string;
  icon?: JSX.Element;
}

export const FormikField = ({ children, className, error, icon, label, style, touched }: Props) => {
  const shouldDisplayError = useMemo<boolean>(
    () => Boolean(touched) && Boolean(error),
    [touched, error],
  );

  return (
    <S.Container
      className={`formik-field ${className ?? ''}`}
      style={style}
      isErrorOccured={shouldDisplayError}
    >
      {label && (
        <S.Label htmlFor={label.for}>
          {label.label}
          {icon && icon}
        </S.Label>
      )}
      <div>{children}</div>
      {shouldDisplayError && <S.InlineError>{error}</S.InlineError>}
    </S.Container>
  );
};
