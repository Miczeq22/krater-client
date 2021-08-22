import { HomePage } from '@pages/home/home.page';
import { LoginPage } from '@pages/login/login.page';
import { RegisterPage } from '@pages/register/register.page';
import { Route, Switch } from 'react-router-dom';

export const AppRouting = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route exact path="/" component={HomePage} />
  </Switch>
);
