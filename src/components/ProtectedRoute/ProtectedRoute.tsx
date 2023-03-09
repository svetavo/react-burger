import { Route, Redirect, RouteProps, useLocation } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import { useSelector } from "../../utils/hooks";
import React from "react";
import { TLocation } from "../../utils/types/types";

type Props = RouteProps & {
	children: React.ReactNode;
  onlyForAuth?: boolean;
}

export const ProtectedRoute: React.FC<Props> = ({ onlyForAuth, children, ...rest }) => {
  const isAuthorized = window.localStorage.getItem("accessToken");
  const location = useLocation<TLocation>();

  if (!onlyForAuth && isAuthorized) {
    const { from } = location.state || { from: { pathname: "/" } };
    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  }

  if (onlyForAuth && !isAuthorized) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }

  return <Route {...rest}>{children}</Route>;
};
