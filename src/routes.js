import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Calendar from "views/Calendar.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Login from "views/LoginDemo";

var routes = [
  // {
  //   path: "/demo",
  //   name: "Login Page",
  //   icon: "tim-icons icon-calendar-60",
  //   component: Login,
  //   layout: "/user"
  // },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "tim-icons icon-calendar-60",
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/user",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
];
export default routes;
