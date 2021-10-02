import { Route, Redirect, RouteProps, Switch } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';

export interface IProps extends RouteProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<RouteProps>;
}

const ProtectedRoute = ({ component: Component, ...rest }: IProps): JSX.Element => {
  const { loggedInUser, isLoading } = useAuth();

  if (isLoading) return <div>loading...</div>;

  return (
    <Switch>
      <Route
        {...rest}
        render={(routeProps) => (loggedInUser ? <Component {...routeProps} /> : <Redirect to={'/login'} />)}
      />
    </Switch>
  );
};

export default ProtectedRoute;
