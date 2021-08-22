import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import { useTranslation } from 'src/hooks/use-translation/use-translation.hook';
import { FormAlert } from 'src/ui/form-alert/form-alert';
import { FormSubTitle } from 'src/ui/form-sub-title/form-sub-title';
import { FormTitle } from 'src/ui/form-title/form-title';
import { Form } from 'src/ui/form/form';
import { FormikField } from 'src/ui/formik-field/formik-field';
import { Logo } from 'src/ui/logo/logo';
import * as Yup from 'yup';
import S from './register-form.styles';

export interface RegisterPayload {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  onSubmit: (values: Omit<RegisterPayload, 'confirmPassword'>) => Promise<void>;
  loading: boolean;
  errorMessage: string | null;
  isSuccessful: boolean;
}

export const RegisterForm = ({ onSubmit, loading, errorMessage, isSuccessful }: Props) => {
  const [
    title,
    subTitle,
    nickname,
    nicknamePlaceholder,
    email,
    emailPlaceholder,
    password,
    passwordPlaceholder,
    confirmPassword,
    confirmPasswordPlaceholder,
    button,
    alreadyMember,
    loginLink,
  ] = useTranslation([
    'register.title',
    'register.subTitle',
    'register.form.nickname',
    'register.form.nickname.placeholder',
    'register.form.email',
    'register.form.email.placeholder',
    'register.form.password',
    'register.form.password.placeholder',
    'register.form.confirmPassword',
    'register.form.confirmPassword.placeholder',
    'register.form.button',
    'register.form.alreadyMember',
    'register.form.loginLink',
  ]);

  const formik = useFormik<RegisterPayload>({
    onSubmit: ({ confirmPassword: confirmPasswordOmit, ...values }) => onSubmit(values),
    initialValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      nickname: Yup.string().min(3).required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      confirmPassword: Yup.string().test(
        'exact-password',
        'Passwords must match',
        // @ts-ignore
        function (value) {
          return this.parent.password === value;
        },
      ),
    }),
  });

  return (
    <Form onSubmit={formik.handleSubmit} withSubtitle>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <FormTitle>{title}</FormTitle>
      <FormSubTitle>{subTitle}</FormSubTitle>
      {errorMessage && (
        <FormAlert description={errorMessage} message="Registration Error" type="error" />
      )}
      {isSuccessful && (
        <FormAlert
          description="Account created successfuly, now please check your email and confirm your email address."
          message="Registration success"
          type="success"
        />
      )}
      <FormikField
        label={{
          label: nickname,
          for: 'nickname',
        }}
        error={formik.errors.nickname}
        touched={formik.touched.nickname}
      >
        <Input
          {...formik.getFieldProps('nickname')}
          id="nickname"
          placeholder={nicknamePlaceholder}
        />
      </FormikField>
      <FormikField
        label={{
          label: email,
          for: 'email',
        }}
        error={formik.errors.email}
        touched={formik.touched.email}
      >
        <Input {...formik.getFieldProps('email')} id="email" placeholder={emailPlaceholder} />
      </FormikField>
      <div>
        <FormikField
          label={{
            label: password,
            for: 'password',
          }}
          error={formik.errors.password}
          touched={formik.touched.password}
        >
          <Input.Password
            {...formik.getFieldProps('password')}
            id="password"
            placeholder={passwordPlaceholder}
          />
        </FormikField>
        <FormikField
          label={{
            label: confirmPassword,
            for: 'confirmPassword',
          }}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
        >
          <Input.Password
            {...formik.getFieldProps('confirmPassword')}
            id="confirmPassword"
            placeholder={confirmPasswordPlaceholder}
          />
        </FormikField>
      </div>
      <Button loading={loading} type="primary" htmlType="submit" disabled={!formik.isValid}>
        {button}
      </Button>
      <S.LoginText>
        {alreadyMember} <S.LoginLink to="/login">{loginLink}</S.LoginLink>
      </S.LoginText>
    </Form>
  );
};
