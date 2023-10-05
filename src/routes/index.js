// All components mapping with path for internal routes

import { lazy } from "react";
// const Dashboard = lazy(() => import("../pages/protected/Dashboard"));

const Page404 = lazy(() => import("../pages/protected/404"));
const Blank = lazy(() => import("../pages/protected/Blank"));

const Communication = lazy(() => import("../pages/protected/Communication"));
const Calendar = lazy(() => import("../pages/protected/Report"));

const routes = [
  {
    path: "/report",
    component: Calendar,
  },

  {
    path: "/communication",
    component: Communication,
  },

  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
