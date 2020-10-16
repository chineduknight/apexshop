import AuthPages from "pages/AuthPages";
import AdminPages from "pages/AuthPages/admin";
import UserPages from "pages/AuthPages/users";
import UnAuthPages from "pages/UnAuthPages";
import withSuspense from "components/HOC/WithSuspens";
import { NOT_FOUND, UNAUTHORIZED, AUTH, USER, MANAGER } from "./pagesPath";

export default [
  {
    path: NOT_FOUND,
    component: withSuspense({ page: "NotFound" }),
    exact: true,
  },
  {
    path: UNAUTHORIZED,
    component: withSuspense({ page: "Unauthorized" }),
    exact: true,
  },

  {
    path: USER,
    component: UserPages,
    exact: false,
  },
  {
    path: MANAGER,
    component: AdminPages,
    exact: false,
  },
  {
    path: AUTH,
    component: AuthPages,
    exact: false,
  },
  {
    path: "/",
    component: UnAuthPages,
    exact: false,
  },
];
