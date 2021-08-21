import { Button, Input } from 'antd';
import { useFormik } from 'formik';
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
  onSubmit: (values: Omit<RegisterPayload, 'confirmPassword'>) => void;
}

export const RegisterForm = ({ onSubmit }: Props) => {
  const formik = useFormik<RegisterPayload>({
    onSubmit,
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
      <FormTitle>Hello! Sign up to get started</FormTitle>
      <FormSubTitle>Sign up and discover news, blogs and much more!</FormSubTitle>
      <FormikField
        label={{
          label: 'Nickname',
          for: 'nickname',
        }}
        error={formik.errors.nickname}
        touched={formik.touched.nickname}
      >
        <Input
          {...formik.getFieldProps('nickname')}
          id="nickname"
          placeholder="Enter your nickname..."
        />
      </FormikField>
      <FormikField
        label={{
          label: 'Email address',
          for: 'email',
        }}
        error={formik.errors.email}
        touched={formik.touched.email}
      >
        <Input
          {...formik.getFieldProps('email')}
          id="email"
          placeholder="Enter your email address..."
        />
      </FormikField>
      <div>
        <FormikField
          label={{
            label: 'Password',
            for: 'password',
          }}
          error={formik.errors.password}
          touched={formik.touched.password}
        >
          <Input.Password
            {...formik.getFieldProps('password')}
            id="password"
            placeholder="Enter your password..."
          />
        </FormikField>
        <FormikField
          label={{
            label: 'Confirm password',
            for: 'confirmPassword',
          }}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
        >
          <Input.Password
            {...formik.getFieldProps('confirmPassword')}
            id="confirmPassword"
            placeholder="Confirm your password..."
          />
        </FormikField>
      </div>
      <Button type="primary" htmlType="submit" disabled={!formik.isValid}>
        Register
      </Button>
      <S.LoginText>
        Already a member? <S.LoginLink to="/login">Log in</S.LoginLink>
      </S.LoginText>
    </Form>
  );
};
