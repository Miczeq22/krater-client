import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input {...formik.getFieldProps('nickname')} />
      </div>
      <div>
        <Input {...formik.getFieldProps('email')} />
      </div>
      <div>
        <Input.Password {...formik.getFieldProps('password')} />
      </div>
      <div>
        <Input.Password {...formik.getFieldProps('confirmPassword')} />
      </div>
      <div>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </div>
    </form>
  );
};
