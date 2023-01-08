import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, route, ...rest }) => {
  const userAuthState = useSelector((store) => store.user);
  const accessToken = window.localStorage.getItem("accessToken");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        accessToken || userAuthState.isLoggedIn || userAuthState?.name ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
