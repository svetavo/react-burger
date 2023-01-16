import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, pass, route, ...rest }) => {
  const userAuthState = useSelector((store) => store.user);

  return pass ? (
    <Route
      {...rest}
      render={({ location }) =>
        userAuthState.isLoggedIn ? (
          <Redirect to={{ pathname: '/profile', state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  ) : (
    <Route
      {...rest}
      render={({ location }) =>
        userAuthState.isLoggedIn ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
