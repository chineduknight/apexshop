import withSuspense from "components/HOC/WithSuspens";
import { USER_DASHBOARD } from "pages/pagesPath";

export const userRoutes = [
  {
    path: USER_DASHBOARD,
    component: withSuspense({ page: "AuthPages/users/Dashboard" }),
    exact: true,
  },
];
