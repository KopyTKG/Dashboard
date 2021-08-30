import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import CalendarP from "views/Calendar.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Todo from "views/Todo.js";

import {
  CalendarIcon,
  ChartPieIcon,
  EmojiHappyIcon,
  BellIcon,
  UserIcon,
  PuzzleIcon,
  AdjustmentsIcon,
  BookmarkIcon
} from '@heroicons/react/outline';

const width = 30;

const Calendar = () => {
  return(
    <CalendarIcon style={{width: width}}/>
  );
}
const ChartPie = () => {
  return(
    <ChartPieIcon style={{width: width}}/>
);
}
const EmojiHappy = () => {
  return(
    <EmojiHappyIcon style={{width: width}}/>
);
}
const Bell = () => {
  return(
    <BellIcon style={{width: width}}/>
);
}
const User = () => {
  return(
    <UserIcon style={{width: width}}/>
);
}
const Puzzle = () => {
  return(
    <PuzzleIcon style={{width: width}}/>
);
}
const Adjustments = () => {
  return(
    <AdjustmentsIcon style={{width: width}}/>
);
}
const BookMark = () => {
  return(
    <BookmarkIcon style={{width: width}}/>
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
  {
    path: "/calendar",
    name: "Calendar",
    icon: Calendar,
    component: CalendarP,
    layout: "/user"
  },
  {
    path: "/todo",
    name: "Todo",
    icon: BookMark,
    component: Todo,
    layout: "/user"
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
    path: "/todo",
    name: "Todo",
    icon: BookMark,
    component: Todo,
    layout: "/admin"
  },
  {
    path: "/icon",
    name: "Icons",
    icon: EmojiHappy,
    component: Icons,
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
