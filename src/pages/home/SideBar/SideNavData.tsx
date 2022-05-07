import { ROUTE_URLS } from "../../../routes/RouteURLS";
import { MdDashboard } from "react-icons/md";
import { CgList } from "react-icons/cg";

export const SideNavData = [
  {
    text: "Dashboard",
    icon: <MdDashboard />,
    link: ROUTE_URLS.DASHBOARD_URL,
  },
  {
    text: "My Games",
    icon: <CgList />,
    link: ROUTE_URLS.MY_GAMES,
  },
];
