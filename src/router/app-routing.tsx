import { ConfirmEmailPage } from '@pages/confirm-email/confirm-email.page';
import { HomePage } from '@pages/home/home.page';
import { LoginPage } from '@pages/login/login.page';
import { RegisterPage } from '@pages/register/register.page';
import { Switch } from 'react-router-dom';
import { AuthorizedRoute } from './authorized-route';
import { GuestRoute } from './guest-route';

export const AppRouting = () => (
  <Switch>
    <GuestRoute exact path="/login" component={LoginPage} />
    <GuestRoute exact path="/register" component={RegisterPage} />
    <AuthorizedRoute exact path="/" component={HomePage} />
    <AuthorizedRoute exact path="/confirm-email" component={ConfirmEmailPage} />
  </Switch>
);
