import { Route, Redirect, RouteProps } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import { useSelector } from "../../utils/hooks";
import React from "react";

type Props = RouteProps & {
	children: React.ReactNode;
	path: string;
	exact?: boolean;
}

const ProtectedRoute: React.FC<Props> = ({ children, pass, route, ...rest }) => {
  const userAuthState = useSelector((store) => store.user);
  const cookie : string | undefined = getCookie('token')
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
        userAuthState.isLoggedIn && cookie? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
