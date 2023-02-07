import { lazy } from "react";

const Home = lazy(() => import("../Home"));
const Matches = lazy(() => import("../Matches"));
const Teams = lazy(() => import("../Teams"));

export const NavigationRoutes = [
  {
    id: 1,
    path: "/home",
    component: Home,
  },
  {
    id: 2,
    path: "/matches",
    component: Matches, 
  },
  {
    id: 3,
    path: "/teams",
    component: Teams,
  },
];