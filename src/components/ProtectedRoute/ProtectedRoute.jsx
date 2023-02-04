import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";

const ProtectedRoute = ({ children, pass, route, ...rest }) => {
  const userAuthState = useSelector((store) => store.user);
  const cookie = getCookie('token')
  return pass ? (
    <Route
      {...rest}
      render={({ location }) =>
        userAuthState.isLoggedIn ? (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  ) : (
    <Route
      {...rest}
      render={({ location }) =>
        userAuthState.isLoggedIn || cookie? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
