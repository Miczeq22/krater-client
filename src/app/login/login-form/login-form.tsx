import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import { FormSubTitle } from 'src/ui/form-sub-title/form-sub-title';
import { FormTitle } from 'src/ui/form-title/form-title';
import { Form } from 'src/ui/form/form';
import { FormikField } from 'src/ui/formik-field/formik-field';
import * as Yup from 'yup';
import S from './login-form.styles';

export interface LoginPayload {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: LoginPayload) => void;
}

export const LoginForm = ({ onSubmit }: Props) => {
  const formik = useFormik<LoginPayload>({
    onSubmit,
    initialValues: {
      email: '',
      password: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    }),
  });

  return (
    <Form onSubmit={formik.handleSubmit} withSubtitle>
      <FormTitle>Hi, Welcome Back!</FormTitle>
      <FormSubTitle>Enter your credentials and see what&apos;s up with your news</FormSubTitle>
      <FormikField
        touched={formik.touched.email}
        error={formik.errors.email}
        label={{
          for: 'email',
          label: 'Email address',
        }}
      >
        <Input
          {...formik.getFieldProps('email')}
          id="email"
          placeholder="Enter your email address..."
        />
      </FormikField>
      <FormikField
        touched={formik.touched.password}
        error={formik.errors.password}
        label={{
          for: 'password',
          label: 'Password',
        }}
      >
        <Input.Password
          {...formik.getFieldProps('password')}
          id="password"
          placeholder="Enter your password..."
        />
      </FormikField>
      <Button type="primary" htmlType="submit" disabled={!formik.isValid}>
        Login
      </Button>
      <S.RegistrationText>
        Not registered yet?{' '}
        <S.RegistrationLink to="/register">Create an account</S.RegistrationLink>
      </S.RegistrationText>
    </Form>
  );
};
