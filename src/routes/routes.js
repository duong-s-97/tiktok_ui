//pages

import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import routesConfigs from "../config/routes";
import Live from '../pages/Live'

// layout

// puclic routes
const publicRoutes = [
  { path: routesConfigs.home, component: Home },
  { path: routesConfigs.following, component: Following },
  { path: routesConfigs.profile, component: Profile },
  { path: routesConfigs.upload, component: Upload },
  { path: routesConfigs.search, component: Search },
  { path: routesConfigs.live, component: Live },
];

const priveteRoutes = [];

export { priveteRoutes, publicRoutes };
