// import LandingPage from './LandingPage';
import withSuspense from "components/HOC/WithSuspens";
import Login from "./Login";
import { CART_PAGE, CART_PAGE2, LOGIN, PRODUCT_DETAIL } from "../pagesPath";

export const publicRoutes = [
  // {
  //   path: FORGOT_PASSWORD,
  //   component: withSuspense({ page: "UnAuthPages/ForgotPasswordPage" }),
  //   exact: true,
  // },
  // {
  //   path: RESET_PASSWORD,
  //   component: withSuspense({ page: "UnAuthPages/ResetPasswordPage" }),
  //   exact: true,
  // },

  {
    path: CART_PAGE,
    component: withSuspense({ page: "UnAuthPages/CartPage" }),
    exact: true,
  },
  {
    path: LOGIN,
    component: Login,
    // component: withSuspense({ page: "UnAuthPages/LoginPage" }),
    exact: true,
  },
  {
    path: PRODUCT_DETAIL,
    component: withSuspense({ page: "UnAuthPages/Product" }),
    exact: true,
  },
  {
    path: "/",
    component: withSuspense({ page: "UnAuthPages/LandingPage" }),
    // component: LandingPage,
    exact: true,
  },
];
