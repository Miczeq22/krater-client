import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthState } from 'src/hooks/use-auth-state/use-auth-state.hook';

export const GuestRoute = (props: RouteProps) => {
  const {
    state: { isAuthorized },
  } = useAuthState();

  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
};
