import styled from 'styled-components';

interface FormProps {
  withSubtitle?: boolean;
}

const Form = styled.form<FormProps>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.base};

  & > .form-title {
    margin-bottom: ${({ theme, withSubtitle = false }) =>
      withSubtitle ? theme.spacing.small : theme.spacing.base};
  }

  & > .form-sub-title {
    margin-bottom: ${({ theme }) => theme.spacing.base};
  }

  & > .formik-field {
    margin-bottom: ${({ theme }) => theme.spacing.base};
  }

  button[type='submit'] {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.primary};
    width: 100%;
    height: 50px;

    &:disabled {
      background-color: ${({ theme }) => theme.color.grey};
      color: ${({ theme }) => theme.color.fontGrey};
    }
  }
`;

const S = { Form };

export default S;
