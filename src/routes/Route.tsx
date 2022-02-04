import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useAuth } from "../providers/Auth";

interface Props extends RouteProps {
  isPrivate?: boolean;
  isAdmin?: boolean;
  component: ComponentType;
}

const Route = ({
  isPrivate = false,
  isAdmin = false,
  component: Component,
  ...rest
}: Props) => {
  const { accessToken, user } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : user.admin? "/dashboard" : "/dashboardClient"} />
        )
      }
    />
  );
};

export default Route;
