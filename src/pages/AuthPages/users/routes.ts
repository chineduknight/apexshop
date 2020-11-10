import withSuspense from "components/HOC/WithSuspens";
import { PRODUCT_DETAIL, USER_DASHBOARD } from "pages/pagesPath";

export const userRoutes = [
  {
    path: USER_DASHBOARD,
    component: withSuspense({ page: "AuthPages/users/Dashboard" }),
    exact: true,
  },
  {
    path: PRODUCT_DETAIL,
    component: withSuspense({ page: "AuthPages/users/Product" }),
    exact: true,
  },
];
