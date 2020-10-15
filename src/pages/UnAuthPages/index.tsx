import { RouterProps } from "react-router";
// import withSuspense from "components/HOC/withSuspense";
import { convertRoutesToComponents } from "helpers/pagesParser";
// import { DASHBOARD } from "../LoggedInUserPages";
import {publicRoutes} from './routes';

// export const LOGIN = "/login";
// export const SIGNUP = "/signup";
// export const FORGOT_PASSWORD = "/forgot-password";
// export const RESET_PASSWORD = "/reset-passwd";


const UnAuthPages = (props: RouterProps) => {
  const { history } = props;

  if (localStorage.getItem("token")) {
    history.push("/users");
  }

  return convertRoutesToComponents(publicRoutes);
};

export default UnAuthPages;