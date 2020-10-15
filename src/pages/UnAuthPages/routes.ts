// import LandingPage from './LandingPage';
import Login from './Login';
import { LOGIN } from '../pagesPath';
import withSuspense from 'components/HOC/WithSuspens';


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
    path: LOGIN,
    component:Login,
    // component: withSuspense({ page: "UnAuthPages/LoginPage" }),
    exact: true,
  },
  {
    path: "/",
    component: withSuspense({ page: "UnAuthPages/LandingPage" }),
    // component: LandingPage,
    exact: true,
  },
];
