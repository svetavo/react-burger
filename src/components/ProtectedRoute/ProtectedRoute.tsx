import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "../../utils/hooks";
import { getCookie } from "../../utils/cookie";
import { TLocation } from "../../utils/types/types";

interface IProps {
  children: JSX.Element;
  unAuthOnly?: boolean;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: React.FC<IProps> = ({ children, unAuthOnly, ...rest }) => {
  const userAuthState = useSelector((store) => store.user);
  const cookie = getCookie("token");

  return unAuthOnly ? (
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
        userAuthState.isLoggedIn && cookie ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
