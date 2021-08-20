import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input {...formik.getFieldProps('email')} />
      </div>
      <div>
        <Input.Password {...formik.getFieldProps('password')} />
      </div>
      <div>
        <Button type="primary" htmlType="button">
          Login
        </Button>
      </div>
    </form>
  );
};
