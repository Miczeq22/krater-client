import { ConfirmEmailPage } from '@pages/confirm-email/confirm-email.page';
import { HomePage } from '@pages/home/home.page';
import { LoginPage } from '@pages/login/login.page';
import { RegisterPage } from '@pages/register/register.page';
import { Switch } from 'react-router-dom';
import { useAuthState } from 'src/hooks/use-auth-state/use-auth-state.hook';
import { AuthorizedRoute } from './authorized-route';
import { GuestRoute } from './guest-route';

export const AppRouting = () => {
  const {
    state: { isAuthorized, isEmailConfirmed, loading },
  } = useAuthState();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isAuthorized && !isEmailConfirmed) {
    return <ConfirmEmailPage />;
  }

  return (
    <Switch>
      <GuestRoute exact path="/login" component={LoginPage} />
      <GuestRoute exact path="/register" component={RegisterPage} />
      <AuthorizedRoute exact path="/" component={HomePage} />
    </Switch>
  );
};
