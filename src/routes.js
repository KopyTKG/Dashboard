import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import CalendarP from "views/Calendar.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

import {
  CalendarIcon,
  ChartPieIcon,
  EmojiHappyIcon,
  BellIcon,
  UserIcon,
  PuzzleIcon,
  AdjustmentsIcon
} from '@heroicons/react/outline';

const Calendar = () => {
  return(
    <CalendarIcon style={{width: 25}}/>
  );
}
const ChartPie = () => {
  return(
    <ChartPieIcon style={{width: 25}}/>
);
}
const EmojiHappy = () => {
  return(
    <EmojiHappyIcon style={{width: 25}}/>
);
}
const Bell = () => {
  return(
    <BellIcon style={{width: 25}}/>
);
}
const User = () => {
  return(
    <UserIcon style={{width: 25}}/>
);
}
const Puzzle = () => {
  return(
    <PuzzleIcon style={{width: 25}}/>
);
}
const Adjustments = () => {
  return(
    <AdjustmentsIcon style={{width: 25}}/>
);
}

var routes = [
  // User layout
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: ChartPie,
    component: Dashboard,
    layout: "/user",
  },
  // Admin layout
  {
    path: "/calendar",
    name: "Calendar",
    icon: Calendar,
    component: CalendarP,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: ChartPie,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Bell,
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: User,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: Puzzle,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: Adjustments,
    component: Typography,
    layout: "/admin",
  },
];
export default routes;
