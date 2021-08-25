import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthState } from 'src/hooks/use-auth-state/use-auth-state.hook';

export const AuthorizedRoute = (props: RouteProps) => {
  const {
    state: { isAuthorized },
  } = useAuthState();

  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};
